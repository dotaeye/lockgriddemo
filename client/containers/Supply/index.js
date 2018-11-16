import React, { Component } from 'react'
import classnames from 'classnames'
import { graphql, compose } from 'react-apollo'
import { getGridInfosQuery, changeGridStatusMutation } from '../../graphql'
import styles from './index.less'

class Supply extends Component {
  state = {
    selectCells: []
  }

  onGridCellClick = gCell => () => {
    const { selectCells } = this.state
    if (selectCells.includes(gCell.gnumber)) {
      const gIndex = selectCells.findIndex(x => x === gCell.gnumber)
      selectCells.splice(gIndex, 1)
      this.setState({
        selectCells
      })
    } else if (
      gCell.status === 3 &&
      !gCell.locked &&
      !selectCells.includes(gCell.gnumber)
    ) {
      selectCells.push(gCell.gnumber)
      this.setState({
        selectCells
      })
    }
  }

  onSupply = () => {
    const { selectCells } = this.state
    this.props
      .changeGridStatus({
        variables: {
          input: { gnumbers: selectCells, status: 0 }
        },
        update(
          proxy,
          {
            data: { changeGridStatus }
          }
        ) {
          let data = proxy.readQuery({ query: getGridInfosQuery })
          data.getGridInfos = changeGridStatus
          proxy.writeQuery({ query: getGridInfosQuery, data })
        }
      })
      .then(res => {
        this.setState({
          selectCells: []
        })
      })
  }

  renderGrid() {
    const gridSize = 4
    const rows = new Array(gridSize).fill(0)
    const columns = new Array(gridSize).fill(0)
    const { getGridInfos } = this.props.data
    const { selectCells } = this.state
    const statusName = {
      0: '可售',
      1: '锁定',
      2: '已下单',
      3: '已售卖'
    }
    return (
      <div className={styles.grid}>
        {rows.map((row, rIndex) => {
          return (
            <div className={styles.gridRow} key={rIndex}>
              {columns.map((column, cIndex) => {
                const gridId = cIndex + 4 * rIndex
                const gCell = getGridInfos[gridId]
                const gridClassName = classnames({
                  [styles.gridCell]: true,
                  [styles.gridDisabled]: gCell.locked || gCell.status !== 3,
                  [styles.gridCellSelected]: selectCells.includes(gridId)
                })
                return (
                  <div
                    className={gridClassName}
                    key={gridId}
                    onClick={this.onGridCellClick(gCell)}
                  >
                    {statusName[gCell.status]}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { data } = this.props
    return (
      <div className="home-container">
        <h1>补货</h1>
        {!data.loading && (
          <div>
            {this.renderGrid()}
            <button onClick={this.onSupply}>补货</button>
          </div>
        )}
      </div>
    )
  }
}

export default compose(
  graphql(getGridInfosQuery),
  graphql(changeGridStatusMutation, { name: 'changeGridStatus' })
)(Supply)

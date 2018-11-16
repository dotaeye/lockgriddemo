import React, { Component } from 'react'
import classnames from 'classnames'
import { graphql, compose } from 'react-apollo'
import {
  getGridInfosQuery,
  changeGridStatusMutation,
  lockGrids,
  unlockGrids
} from '../../graphql'
import styles from './index.less'

class Order extends Component {
  onGridCellClick = gCell => () => {
    const { getGridInfos } = this.props.data
    if (gCell.status === 1) {
      this.onUnLock(gCell.gnumber)
    } else if (gCell.status === 0) {
      this.onLock(gCell.gnumber)
    }
  }

  onOrder = () => {
    const { getGridInfos } = this.props.data
    const gnumbers = getGridInfos
      .filter(x => x.status === 1)
      .map(x => x.gnumber)
    this.props
      .changeGridStatus({
        variables: {
          input: { gnumbers, status: 2 }
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

  onLock = gnumber => {
    this.props.lockGrids({
      variables: {
        input: { gnumbers: [gnumber] }
      },
      update(
        proxy,
        {
          data: { lockGrids }
        }
      ) {
        let data = proxy.readQuery({ query: getGridInfosQuery })
        data.getGridInfos = lockGrids
        proxy.writeQuery({ query: getGridInfosQuery, data })
      }
    })
  }

  onUnLock = gnumber => {
    this.props.unlockGrids({
      variables: {
        input: { gnumbers: [gnumber] }
      },
      update(
        proxy,
        {
          data: { unlockGrids }
        }
      ) {
        let data = proxy.readQuery({ query: getGridInfosQuery })
        data.getGridInfos = unlockGrids
        proxy.writeQuery({ query: getGridInfosQuery, data })
      }
    })
  }

  renderGrid() {
    const gridSize = 4
    const rows = new Array(gridSize).fill(0)
    const columns = new Array(gridSize).fill(0)
    const { getGridInfos } = this.props.data
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
                  [styles.gridDisabled]: gCell.status > 1,
                  [styles.gridCellSelected]: gCell.status === 1
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
        <h1>模拟下单</h1>
        {!data.loading && (
          <div>
            {this.renderGrid()}
            <button onClick={this.onOrder}>下单锁定的商品</button>
          </div>
        )}
      </div>
    )
  }
}

export default compose(
  graphql(getGridInfosQuery),
  graphql(changeGridStatusMutation, { name: 'changeGridStatus' }),
  graphql(lockGrids, { name: 'lockGrids' }),
  graphql(unlockGrids, { name: 'unlockGrids' })
)(Order)

import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Supply from '../containers/Supply'
import Picker from '../containers/Picker'
import Order from '../containers/Order'

export default function Routes() {
  return (
    <div>
      <div>
        <Link to="/">补货</Link>
      </div>
      <div>
        <Link to="/picker">拣货</Link>
      </div>

      <div>
        <Link to="/order">模拟下单</Link>
      </div>

      <Switch>
        <Route path="/" exact component={Supply} />
        <Route path="/picker" exact component={Picker} />
        <Route path="/order" exact component={Order} />
      </Switch>
    </div>
  )
}

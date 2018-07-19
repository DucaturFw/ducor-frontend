import React from 'react'
import { injectGlobal } from 'emotion'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/Home'
import ConstructPage from 'containers/Construct'
import ContractCodePage from 'containers/ContractCode'

injectGlobal({
  body: {
    margin: 0,
    fontFamily: 'Open Sans'
  }
})

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/construct" component={ConstructPage} />
      <Route path="/contractCode" component={ContractCodePage} />
    </Switch>
  )
}
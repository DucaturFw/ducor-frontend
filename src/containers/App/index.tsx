import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'

import HomePage from 'containers/Home'
import ConstructPage from 'containers/Construct'
import ContractCodePage from 'containers/ContractCode'

injectGlobal({
  body: {
    margin: 0,
    fontFamily: 'Helvetica, Open Sans'
  }
})

const theme = {
  titleColor: '#352E6C',
  mainBackgroundColor: '#F0F2F6',
  borderColor: '#AACAFF',
  menuLinkColor: '#6987B9',
  activeColor: '#3EA5F5',
  lightColor: '#fff',
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/construct" component={ConstructPage} />
        <Route path="/contract/:name/:type/:provider/:pair" component={ContractCodePage} />
      </Switch>
    </ThemeProvider>
  )
}
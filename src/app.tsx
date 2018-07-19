import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from 'containers/App'

const MOUNT_NODE = document.getElementById('app')
const history = createHistory()

const render = () => {
  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), MOUNT_NODE)
}

if (module.hot) {
  module.hot.accept([ './containers/App' ], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()
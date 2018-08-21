import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'

const { NODE_ENV } = process.env
const MOUNT_NODE = document.getElementById('app')

const render = (App: () => JSX.Element) => {
  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), MOUNT_NODE)
}

if (NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept([ './containers/App' ], () => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render(require('containers/App').default)
    })
  }

  render(require('containers/App').default)
} else {
  render(App)
}
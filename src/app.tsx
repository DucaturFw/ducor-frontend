import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import React from 'react'
import ReactDOM from 'react-dom'

import reducer from 'reducers'
import rootSaga from 'sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
  }
}

const MOUNT_NODE = document.getElementById('app')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga as any)

const render = (App: any) => {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), MOUNT_NODE)
}

if (module.hot) {
  module.hot.accept([ './containers/App' ], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(require('containers/App').default)
  })
}

render(require('containers/App').default)
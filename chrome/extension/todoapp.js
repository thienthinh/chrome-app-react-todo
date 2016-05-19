// Fix webpack hot reload issue
if (module.hot) {
  module.hot.accept();
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from '../../app/app/reducer'
import App from '../../app/app/App'
import '../../css/app.scss'

import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

let store = createStore(
	todoApp,
	applyMiddleware(
		loggerMiddleware
	)
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

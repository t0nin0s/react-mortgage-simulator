import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './components/Root'
import configureStore from './store/configureStore.dev'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()

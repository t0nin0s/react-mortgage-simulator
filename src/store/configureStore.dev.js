import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      createLogger()
    )
  )

  return {
    ...store
  }
}

export default configureStore

import {
  createStore
} from 'redux'

export const storeFactory = [
  function() {
    return createStore(
      state => state,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
]

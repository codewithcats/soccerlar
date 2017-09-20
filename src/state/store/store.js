import {
  createStore
} from 'redux'

export const storeFactory = [
  function() {
    return createStore(
      state => state
    )
  }
]

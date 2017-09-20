import {
  createStore
} from 'redux'

export const storeFactory = [
  function() {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'INC':
          return {
            count: state.count + 1
          }
        default:
          return state
      }
    }
    return createStore(
      reducer,
      { count: 0 },
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
]

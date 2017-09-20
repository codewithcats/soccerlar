import {
  createStore
} from 'redux'

export const storeFactory = [
  function() {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'LEAGUES':
          const {payload: {leagues}} = action
          return {...state, leagues}
        default:
          return state
      }
    }
    const initialState = {
      leagues: []
    }
    return createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
]

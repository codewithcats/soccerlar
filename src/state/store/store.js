import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'

const indexByLeagueSlug = R.indexBy(R.prop('league_slug'))

export const storeFactory = [
  'effects',
  function(effects) {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'LEAGUES':
          const {payload: {leagues}} = action
          const slugToLeague = indexByLeagueSlug(leagues)
          return {
            ...state,
            leagues,
            'slug<->leagues': slugToLeague,
          }
        default:
          return state
      }
    }

    const initialState = {
      leagues: []
    }

    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      || compose

    const store = createStore(
      reducer,
      initialState,
      composeEnhancers(
        applyMiddleware(sagaMiddleware)
      )
    )

    effects.forEach(fx => sagaMiddleware.run(fx))

    return store
  }
]

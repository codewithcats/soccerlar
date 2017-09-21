import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'

const indexByLeagueSlug = R.indexBy(R.prop('league_slug'))
const sortByNameAsc = R.sort(R.ascend(R.prop('name')))
const sortByNameDesc = R.sort(R.descend(R.prop('name')))
const leaguesToSlugs = R.map(R.prop('league_slug'))

export const storeFactory = [
  'effects',
  function(effects) {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'LEAGUES':
          const {payload: {leagues}} = action
          const slugToLeague = indexByLeagueSlug(leagues)
          const ascSorted = leaguesToSlugs(sortByNameAsc(leagues))
          const descSorted = leaguesToSlugs(sortByNameDesc(leagues))
          return {
            ...state,
            'slug<->league': slugToLeague,
            sortedLeagues: {
              asc: ascSorted,
              desc: descSorted,
            }
          }
        default:
          return state
      }
    }

    const initialState = {
      'slug<->leagues': {},
      sortedLeagues: {
        asc: [],
        desc: [],
      }
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

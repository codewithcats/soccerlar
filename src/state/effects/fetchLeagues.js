import {take, call} from 'redux-saga/effects'

export function fetchLeaguesEffect(api) {
  return function* () {
    while (true) {
      yield take('LEAGUES')
      const leagues = yield call(api.fetchLeagues)
      console.debug('[fetchLeaguesEffect] leagues', leagues)
    }
  }
}

import {take, call, put} from 'redux-saga/effects'

export function fetchLeaguesEffect(api) {
  return function* () {
    while (true) {
      yield take('FETCH_LEAGUES')
      const leagues = yield call(api.fetchLeagues)
      yield put({
        type: 'LEAGUES',
        payload: {
          leagues
        }
      })
    }
  }
}

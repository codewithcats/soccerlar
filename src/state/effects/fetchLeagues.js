import {take} from 'redux-saga/effects'

export function* fetchLeaguesEffect() {
  while (true) {
    yield take('LEAGUES')
    console.debug('[fetchLeaguesEffect] LEAGUES taken')
  }
}

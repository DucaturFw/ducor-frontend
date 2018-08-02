import { all, take, call, put, fork } from 'redux-saga/effects'

import { setConfig, sendForm, setResults } from 'actions'
import { API_URL } from 'config'

function* requestConfig() {
  const res = yield call(fetch, `${API_URL}/config`)
  const { categories } = yield res.json()
  yield put(setConfig(categories))
}

function* requestResults() {
  while (true) {
    try {
      const { payload } = yield take(sendForm)
      const { provider, pair, updateAfter, retireAfter } = payload
      const res = yield call(fetch, `${API_URL}/generate/eos/crypto/${provider}/${pair}?updatefreq=${updateAfter}&lifetime=${retireAfter}`)
      const result = yield res.json()
      yield put(setResults(result))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function* constructSaga() {
  yield all([
    fork(requestConfig),
    fork(requestResults)
  ])
}
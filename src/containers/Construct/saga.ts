import { take, call, put, fork } from 'redux-saga/effects'

import { setConfig, sendForm, setResults } from 'actions'
import { API_URL } from 'config'

function* requestConfig() {
  const res = yield call(fetch, `${API_URL}/config`)
  const { categories } = yield res.json()
  yield put(setConfig(categories))
}

function* requestResults() {
  while (true) {
    const { payload } = yield take(sendForm)
    const { provider, pair, updateAfter, retireAfter } = payload
    const res = yield call(fetch, `${API_URL}/generate/eos/crypto/${provider}/${pair}?updatefreq=${updateAfter}&lifetime=${retireAfter}`)
    const result = yield res.json()
    yield put(setResults(result))
  }
}

export default function* constructSaga() {
  yield fork(requestConfig)
  yield fork(requestResults)
}
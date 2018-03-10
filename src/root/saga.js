import { takeEvery, takeLatest } from 'redux-saga/effects'
import {getProducts} from 'products/saga.js'
import {productTypes} from 'products/reducers.js'

function * rootSaga() {
  yield takeEvery(productTypes.FETCH_PRODUCT, getProducts)
}

export default rootSaga

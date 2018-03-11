import { takeLatest } from 'redux-saga/effects'
import {getProducts} from 'products/saga.js'
import {productTypes} from 'products/reducers.js'

function * rootSaga () {
  return [
    yield takeLatest(productTypes.FETCH_PRODUCT, getProducts)
  ]
}

export default rootSaga

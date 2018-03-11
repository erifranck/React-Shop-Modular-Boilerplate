import { call, put } from 'redux-saga/effects'
import productActions from 'products/reducers'
import {getProducts as getProductsRequest} from 'products/services'

export function * getProducts () {
  yield put(productActions.onFetch())
  const response = yield call(getProductsRequest)
  yield put(productActions.fetchProductSuccess(response))
}

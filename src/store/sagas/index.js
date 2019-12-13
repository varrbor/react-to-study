import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { fetchIngredientsSaga } from './ingredient'
import { fetchOrdersSaga } from './order'

export function* watchIngredients() {
    yield all([
        takeEvery(actionTypes.FETCH_INGREDIENTS, fetchIngredientsSaga),
        takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
    ])
}
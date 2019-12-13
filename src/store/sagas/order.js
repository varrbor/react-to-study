import { put } from 'redux-saga/effects';
import axios from '../../axios-orders'
import * as actions from '../actions/index'

export function* fetchOrdersSaga() {
    yield put(actions.fetchOrdersStart());
    try {
        const response = yield axios.get('./orders.json');

        const fetchedOrders = [];
        for (let key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        }
        console.log(fetchedOrders)
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (err) {
        yield put(actions.fetchOrdersFail(err));
    }
}

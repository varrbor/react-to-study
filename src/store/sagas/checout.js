import { put, call } from 'redux-saga/effects';
import axios from '../../axios-orders'
import * as actions from '../actions/index'
import React from "react";

export function* sendOrderSaga(props) {
    yield put(actions.sendOrderStart());
    try {
        const response = yield axios.post( '/orders.json', props.order );
        yield put(actions.sendOrderSuccess());
        window.location.href = "/";
    } catch (err) {
        yield put(actions.fetchOrdersFail(err));
    }
}

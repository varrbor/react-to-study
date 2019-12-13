import * as actionTypes from './actionTypes';

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = err => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        err: err
    }
}

export const fetchOrders = () => {
    return {
        type: actionTypes.FETCH_ORDERS
    }
}

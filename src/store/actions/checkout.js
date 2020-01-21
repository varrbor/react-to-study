import * as actionTypes from './actionTypes';

export const inputHandler = (param) => {
    return {
        type: actionTypes.INPUT_HANDLER,
        updatedOrderFormName: param.identifier,
        val: param.val,
        formIsValid: param.formIsValid
    }
}

export const sendOrder = (order) => {
    return {
        type: actionTypes.SEND_ORDER,
        order: order
    }
}

export const sendOrderStart = () => {
    return {
        type: actionTypes.SEND_ORDER_START,
    }
}

export const sendOrderSuccess = () => {
    return {
        type: actionTypes.SEND_ORDER_SUCCESS,
    }
}


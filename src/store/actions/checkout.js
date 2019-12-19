import * as actionTypes from './actionTypes';

export const inputHandler = (param) => {
    return {
        type: actionTypes.INPUT_HANDLER,
        updatedOrderFormName: param.identifier,
        val: param.val,
        formIsValid: param.formIsValid
    }
}


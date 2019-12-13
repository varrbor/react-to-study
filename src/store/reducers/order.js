import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: true
};

const fetchOrdersStart = ( state, action ) => {
    return {
        ...state,
        ...{ loading: true }
    }
};

const fetchOrdersSuccess = ( state, action ) => {
    return {
        ...state,
        ...{ orders: action.orders, loading: false }
    }
};

const fetchIngredientsFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
};

const order = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchIngredientsFail(state, action);
        default:
            return state;
    }
};

export default order;
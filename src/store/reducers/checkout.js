import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '',
            validation: {},
            valid: true
        }
    },
    formIsValid: false,
    loading: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const inputHandler = ( state, action ) => {
    return {
        ...state,
        orderForm: {
            ...state.orderForm,
            [action.updatedOrderFormName]: action.val
        },
        formIsValid: action.formIsValid
    }
};

const sendOrderStart = ( state, action ) => {
    return {
        ...state,
        loading: true
    }
};

const sendOrderSuccess = ( state, action ) => {
    return {
        ...state,
        loading: false
    }};

const sendOrderFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }};

const checkoutReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.INPUT_HANDLER: return inputHandler( state, action );
        case actionTypes.SEND_ORDER_START: return sendOrderStart( state, action );
        case actionTypes.SEND_ORDER_SUCCESS: return sendOrderSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return sendOrderFail( state, action );

        default:
            return state;
    }
};

export default checkoutReducer;
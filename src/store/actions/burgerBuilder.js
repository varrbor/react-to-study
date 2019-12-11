import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const toggleLoadingState = () => {
    return {
        type: actionTypes.TOGGLE_LOADING_STATE
    };
};

export const initIngredients = () => {

    return dispatch => {
        dispatch(toggleLoadingState());
        axios.get( 'https://key-mystery-213512.firebaseio.com/ingredients.json' )
            .then( response => {
                dispatch(setIngredients(response.data));
                dispatch(toggleLoadingState());
            } )
            .catch( error => {
                console.log('request error')
            } );
    };
};
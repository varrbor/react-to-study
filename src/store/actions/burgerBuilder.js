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

export const fetchIngredientsStart = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_START
    }
}

export const fetchIngredientsSuccess = ingredients => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFail = err => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAIL,
        err: err
    }
}

export const fetchIngredients = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS
    }
}

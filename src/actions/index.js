import * as Types from '../constants/actionTypes';


export const addProductToBasket = (product) => {
    return {
        type: Types.ADD_TO_BASKET,
        product
    }
}

export const removeProductFromBasket = (id) => {
    return {
        type: Types.ADD_TO_BASKET,
        id
    }
}
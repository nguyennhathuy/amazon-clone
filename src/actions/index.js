import * as Types from '../constants/actionTypes';


export const addProductToBasket = (product) => {
    return {
        type: Types.ADD_TO_BASKET,
        product
    }
}
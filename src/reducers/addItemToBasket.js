import * as Types from '../constants/actionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_TO_BASKET:
            state.push(action.product);
            return [...state];
        case Types.REMOVE_FROM_BASKET:
            console.log('remove');
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;
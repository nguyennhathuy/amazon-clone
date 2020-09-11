import * as Types from '../constants/actionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_TO_BASKET:
            return [...state, action.product];
        case Types.REMOVE_FROM_BASKET:
            console.log(action);
            console.log(state);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;
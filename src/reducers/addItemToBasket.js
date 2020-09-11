import * as Types from '../constants/actionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
    let index = -1;
    switch(action.type) {
        case Types.ADD_TO_BASKET:
            return [...state, action.product];
        case Types.REMOVE_FROM_BASKET:
            for(let i = 0; i < state.length; i++) {
                if(action.id === state[i].id){
                    index = i;
                    break;
                }
            }
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;
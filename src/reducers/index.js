import {combineReducers} from 'redux';
import products from '../reducers/addItemToBasket';


const myReducer = combineReducers({
    products //products: products
});

export default myReducer;
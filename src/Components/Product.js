import React from 'react';
import '../Style/Product.css';
import * as Actions from '../actions/index';
import {connect} from 'react-redux';

function Product({ id, title, price, rating, image, addProductToBasket}) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__infoPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__infoRating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return <p key={i}>* </p>
                        })}
                </div>
            </div>
            <img src={image} alt=''/>
            <button type='button' onClick={() => {addProductToBasket(id)}}>Add to basket</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addProductToBasket: (product) => {
            dispatch(Actions.addProductToBasket(product));
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);

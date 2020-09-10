import React from 'react';
import '../Style/Product.css';
import * as Actions from '../actions/index';
import {connect} from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ id, title, price, rating, image, addProductToBasket}) {
    const star = [];
    for(var i = 0; i < rating; i++) {
        star.push(<StarIcon className='product__rating' key={i}/>);
    }
    if(star.length !== 5) {
        for(var j = star.length; j < 5; j++) {
            star.push(<StarBorderIcon key={j} className='product__rating'/>)
        }
    }

    const product = {
        id,
        title,
        price,
        rating,
        image
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__infoPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__infoRating'>
                    {star}
                </div>
            </div>
            <img src={image} alt=''/>
            <button type='button' onClick={() => {addProductToBasket(product)}}>Add to basket</button>
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

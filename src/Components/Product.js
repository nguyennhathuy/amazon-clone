import React from 'react';
import '../Style/Product.css';

function Product({ title, price, rating, image }) {
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
                            return <p>* </p>
                        })}
                </div>
            </div>
            <img src={image} />
            <button>Add to basket</button>
        </div>
    )
}

export default Product

import React from 'react';
import '../Style/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {connect} from 'react-redux';


function Checkout({products}) {
    let basketItems = [];
    if(products) {
        basketItems = products.map((product, index)=> {
            return <CheckoutProduct key={index} id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating}/>
        });
    }
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' alt='' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
                <div>
                    <h2 className='checkout__title'>Your shopping basket</h2>
                    {basketItems}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(Checkout);

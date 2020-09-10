import React from 'react';
import '../Style/Subtotal.css';
import { connect } from 'react-redux';

function Subtotal({products}) {
    let totalPrice = 0;
    for(var i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    }
    return (
        <div className='subtotal'>
            <p>
                Subtotal ({products.length} items): <strong>$ {totalPrice}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(Subtotal);

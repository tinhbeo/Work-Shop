import React from 'react';
import CartList from './CartList';

function Cart(props) {
    return (
        <div className='vh-100' style={{ marginTop: '150px' }}>
            <h1 className='text-center my-5'>Your Cart</h1>
            <CartList />
        </div>
    );
}

export default Cart;
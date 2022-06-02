import React from 'react';
import { useSelector } from "react-redux";
import ButtonLink from "components/ButtonLink"
import CartList from './CartList';

function Cart(props) {
    const store = useSelector((state) => state.cart.store);

    return (
        <div style={{ marginTop: '150px' }}>
            <h1 className='text-center my-5'>Your Cart</h1>
            {store.length === 0 ? <div><h3 className='text-center mb-3'>Your cart is empty</h3><ButtonLink link = "/products" text = "Go to Shopping"/></div>:<CartList />}
        </div>
    );
}

export default Cart;
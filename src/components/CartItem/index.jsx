import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
function CartItem(props) {
    const [quantity, setQuantity] = useState(1);
    const price = 10;
    const total = price * quantity;

    function handleQuantityChange(e) {
        let newQuantity = e.target.value;

        if (newQuantity === 0) {
            newQuantity = 1;
        }
        setQuantity(Number(newQuantity));
    }
    return (
        <div className='cart__item'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="d-flex align-items-center cart__item__product">
                        <NavLink to='/home'><img src="https://vendor.webuildthemes.com/assets/images/demo/product-4.jpg" className='w-100' alt="img" /></NavLink>
                        <div className="flex-grow-1 ms-4 cart__item__content">
                            <h5>Analog Magazine Rack</h5>
                            <span>Red</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <span>${price}</span>
                </div>
                <div className="col-lg-2 text-center">
                    <div className="counter">
                        <button
                            onClick={() => {
                                if (quantity <= 1) {
                                    setQuantity(1);
                                } else {
                                    setQuantity(quantity - 1);
                                }
                            }}>-</button>
                        <input type="number" value={quantity} onChange={handleQuantityChange} />
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <span>${total}</span>
                </div>
            </div>

            <span className='cart__item-delete'><i className="bi bi-x"></i></span>
        </div>
    );
}

export default CartItem;
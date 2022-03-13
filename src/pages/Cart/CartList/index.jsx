import React from 'react';
import CartItem from '../../../components/CartItem';
import './style.scss'
function CartList(props) {
    return (
        <div className='cart__list'>
            <div className="container">
                <div className="row mb-1">
                    <div className="col-lg-8">
                        <div className="row cart__list-top">
                            <div className="col-lg-6">
                                <span>products</span>
                            </div>
                            <div className="col-lg-2 text-center">
                                <span>price</span>
                            </div>
                            <div className="col-lg-2 text-center">
                                <span>quantity</span>
                            </div>
                            <div className="col-lg-2 text-center">
                                <span>total</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart__list__items">
                            <CartItem />
                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;
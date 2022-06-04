import CartItem from 'components/CartItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';
function CartList(props) {
    const store = useSelector((state) => state.cart.store);
    const total = store.reduce((prev, current) => {
        return prev + current.quantity * current.price;
    }, 0);

    return (
        <div className="cart__list">
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
                            {store &&
                                store.map((item) => (
                                    <CartItem
                                        id={item.id}
                                        key={item.id}
                                        image1={item.image1}
                                        image2={item.image2}
                                        price={item.price}
                                        name={item.name}
                                        quantity={item.quantity}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cart__detail">
                            <div className="card text-dark bg-light mb-3">
                                <div className="card-header py-3">
                                    <p className="mb-0">Order Summary</p>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>
                                            <span>Subtotal</span>
                                            <span>${total}</span>
                                        </li>
                                        <li>
                                            <span>Shipping</span>
                                            <span>$0</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li className="mb-0 fs-5">
                                            <span>Total</span>
                                            <span>${total}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <NavLink
                                to="/checkout"
                                className="btn btn-success w-100 py-3 text-uppercase"
                                style={{
                                    backgroundColor: '#4F944F',
                                    borderColor: '#4F944F',
                                }}
                            >
                                checkout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;

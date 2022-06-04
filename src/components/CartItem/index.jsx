import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsX } from "react-icons/bs";
import "./style.scss";
import { useDispatch } from "react-redux";
import { deleteProduct, updateCart } from "features/addToCart/cartSlice";
function CartItem(props) {
    const { id, image1, price, name } = props;
    const [quantity, setQuantity] = useState(props.quantity);
    const dispatch = useDispatch();
    const total = price * quantity;
    function handleQuantityChange(e) {
        let newQuantity = e.target.value;

        if (newQuantity === 0) {
            newQuantity = 1;
        }
        setQuantity(Number(newQuantity));

        dispatch(
            updateCart({
                id: id,
                quantity: newQuantity,
            })
        );
    }
    function handleBlur() {
        if (quantity <= 0) {
            setQuantity(1);
            dispatch(
                updateCart({
                    id: id,
                    quantity: 1,
                })
            );
        }
    }

    function handleIncre() {
        setQuantity(quantity + 1);
        dispatch(
            updateCart({
                id: id,
                quantity: quantity + 1,
            })
        );
    }

    function handleDecre() {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
            dispatch(
                updateCart({
                    id: id,
                    quantity: quantity - 1,
                })
            );
        }
    }
    function handleDelete() {
        dispatch(deleteProduct(id));
    }
    return (
        <div className="cart__item">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="d-flex align-items-center cart__item__product">
                        <NavLink to="/home">
                            <img src={image1} className="w-100" alt="img" />
                        </NavLink>
                        <div className="flex-grow-1 ms-4 cart__item__content">
                            <h5>{name}</h5>
                            <span>Red</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <span>${price}</span>
                </div>
                <div className="col-lg-2 text-center">
                    <div className="counter">
                        <button onClick={handleDecre}>-</button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleBlur}
                        />
                        <button onClick={handleIncre}>+</button>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <span>${total}</span>
                </div>
            </div>

            <span className="cart__item-delete" onClick={handleDelete}>
                <BsX
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </span>
        </div>
    );
}

export default CartItem;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "features/addToCart/cartSlice";
function Product(props) {
    const [inCart, setInCart] = useState(false);
    const store = useSelector((state) => state.cart.store);
    useEffect(() => {
        setInCart(store.some((item) => item.id === props.id));
    }, [store]);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addProduct({
                ...props,
                quantity: 1,
            })
        );
    };
    return (
        <div className="product">
            <NavLink to={`/products/${props.id}`}>
                <div className="product__image">
                    <img className="w-100" src={props.image1} alt="..." />
                    <img className="w-100" src={props.image2} alt="..." />
                </div>
            </NavLink>
            <div className=" mt-3 product__content">
                <div className="d-flex justify-content-between">
                    <NavLink
                        to={`/products/${props.id}`}
                        className="product__title"
                    >
                        {props.name}
                    </NavLink>
                    <AiFillHeart style={{ color: "#4f944f" }} />
                </div>
                <div>
                    <span>${props.price}</span>

                    {inCart ? (
                        <NavLink to="/cart" className="underline product__add">
                            VIEW CART
                        </NavLink>
                    ) : (
                        <span
                            onClick={handleAddToCart}
                            className="underline product__add"
                        >
                            ADD TO CART
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;

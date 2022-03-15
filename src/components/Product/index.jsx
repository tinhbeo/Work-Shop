import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import './style.scss';
function Product(props) {
    return (
        <div className="product">
            <NavLink to={`/products/${props.id}`}>
                <div className="product__image">
                    <img className="w-100"
                        src={props.image1} alt="..." />
                    <img className="w-100"
                        src={props.image2} alt="..." />
                </div>
            </NavLink>
            <div className=" mt-3 product__content">
                <div className="d-flex justify-content-between">
                    <NavLink to={`/products/${props.id}`} className='product__title'>{props.name}</NavLink>
                    {/* <i className="bi bi-heart-fill"></i> */}
                    <AiFillHeart />
                </div>
                <div>
                    <span>${props.price}</span>
                    <NavLink to='/' className="underline product__add">ADD TO CART</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Product;
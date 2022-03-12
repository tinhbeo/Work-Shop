import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'
function CategoryCard(props) {
    return (
        <NavLink to={props.link || '/1'}>
            <div className="category__card" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="category__card__body">
                    <h3 className='text-white text-center'>{props.text}</h3>
                </div>
            </div>
        </NavLink>
    );
}

export default CategoryCard;
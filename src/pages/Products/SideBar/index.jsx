import React from 'react';
import './style.scss';
import { NavLink } from "react-router-dom";
function SideBar(props) {
    return (
        <div className='side__bar'>
            <p>Select option</p>
            <ul>
                <li><NavLink to="/products" className='underline'>All</NavLink></li>
                <li><NavLink to="/men" className='underline'>Men</NavLink></li>
                <li><NavLink to="/women" className='underline'>Women</NavLink></li>
            </ul>
        </div>
    );
}

export default SideBar;
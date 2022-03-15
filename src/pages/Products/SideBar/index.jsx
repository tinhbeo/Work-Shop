import React from 'react';
import './style.scss';
import { NavLink } from "react-router-dom";
function SideBar(props) {
    const { gender, handleGenderChange } = props;
    const activeClassName = 'underline active';

    return (
        <div className='side__bar'>
            <p>Select option</p>
            <ul>
                <li><NavLink to='/all'
                    onClick={(e) => handleGenderChange(undefined, e)}
                    className={gender === undefined ? activeClassName : 'underline'}>All</NavLink></li>
                <li><NavLink to='/men'
                    onClick={(e) => handleGenderChange(1, e)}
                    className={gender === 1 ? activeClassName : 'underline'}>Men</NavLink></li>
                <li><NavLink to='/women'
                    onClick={(e) => handleGenderChange(0, e)}
                    className={gender === 0 ? activeClassName : 'underline'}>Women</NavLink></li>
            </ul>
        </div>
    );
}

export default SideBar;
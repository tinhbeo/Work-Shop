import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
function ButtonLink(props) {
    return (
        <div className="text-center">
            <NavLink to={'/' || props.link} className="btn btn-link">{props.text}</NavLink>
        </div>
    );
}

export default ButtonLink;
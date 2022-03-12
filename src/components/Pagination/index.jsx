import React from 'react';
import { NavLink } from 'react-router-dom';

function Pagination(props) {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>
                <li className="page-item"><NavLink to='/' className="page-link">1</NavLink></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item"><NavLink to='/' className="page-link" href="#">3</NavLink></li>
                <li className="page-item">
                    <NavLink to='/' className="page-link" href="#">Next</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
import React from 'react';
import './style.scss';
function Pagination(props) {
    const { totalProduct, pagination, handlePageChange } = props;
    const { page, limit } = pagination;
    const totalPage = [];
    for (let index = 1; index <= Math.ceil(totalProduct / limit); index++) {
        totalPage.push(index);
    }
    return (
        <nav>
            <ul className="pagination">
                {page <= 1 ?
                    <li className="page-item disabled">
                        <span onClick={() => handlePageChange(page - 1)} className="page-link">Previous</span>
                    </li> :
                    <li className="page-item">
                        <span onClick={() => handlePageChange(page - 1)} className="page-link">Previous</span>
                    </li>
                }

                {
                    totalPage.map((number) => {
                        if (number === page) {
                            return (
                                <li key={number} className="page-item active" aria-current="page">
                                    <span onClick={() => handlePageChange(number)} className="page-link">{number}</span>
                                </li>
                            )
                        } else {
                            return (
                                <li key={number} className="page-item">
                                    <span onClick={() => handlePageChange(number)} className="page-link">{number}</span>
                                </li>
                            )
                        }
                    })
                }

                {page >= totalPage.length ?
                    <li className="page-item disabled">
                        <span onClick={() => handlePageChange(page + 1)} className="page-link">Next</span>
                    </li> :
                    <li className="page-item">
                        <span onClick={() => handlePageChange(page + 1)} className="page-link">Next</span>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Pagination;
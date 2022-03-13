import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Product from '../../components/Product';
import SideBar from './SideBar';
import productApi from '../../api/product';
import './style.scss';
function Products(props) {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(1);
    const [filter, setFilter] = useState({
        page: 1,
        limit: 6
    });


    useEffect(() => {
        async function getProducts() {
            try {
                const respone = await productApi.getAll(filter);
                setProducts(respone);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [filter]);

    useEffect(() => {
        async function getAllProducts() {
            try {
                const max = await productApi.getAll();
                setTotal(max.length);
            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts();
    }, []);

    function handlePageChange(newPage) {
        if (newPage <= 0 || newPage > total) return;
        setFilter(
            {
                ...filter,
                page: newPage
            }
        )
    }

    return (
        <div className='products'>
            <section className='top'>
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink className='text-dark underline' to='/home'>Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row justify-content-end mb-5">
                        <div className="col-lg-9">
                            <div className="row align-items-end">
                                <div className="col-lg-6">
                                    <h1>Products</h1>
                                    <span className='text-secondary text-uppercase lh-lg'>{total} products</span>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            What's New
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink to='/' className="dropdown-item">Action</NavLink></li>
                                            <li><NavLink to='/' className="dropdown-item">Another action</NavLink></li>
                                            <li><NavLink to='/' className="dropdown-item">Something else here</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <SideBar />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {products.map((product) => (
                                    <div key={product.id} className="col-lg-4">
                                        <Product
                                            id={product.id}
                                            image1={product.image1}
                                            image2={product.image2}
                                            name={product.name}
                                            price={product.price} />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Pagination totalProduct={total} pagination={filter} handlePageChange={handlePageChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
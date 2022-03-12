import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Product from '../../components/Product';
import SideBar from './SideBar';
import './style.scss'
function Products(props) {
    const [products, setProducts] = useState([]);

    useState(() => {
        async function getProducts() {
            const api = 'https://6226c9bc2dfa5240180d2202.mockapi.io/shop/products?page=1&limit=9';
            const respone = await fetch(api);
            const data = await respone.json();
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <div className='products'>
            <section className='top'>
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><NavLink className='text-dark underline' to='/home'>Home</NavLink></li>
                                <li class="breadcrumb-item active" aria-current="page">Products</li>
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
                                    <span className='text-secondary text-uppercase lh-lg'>20 products</span>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            What's New
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                                    <div className="col-lg-4">
                                        <Product
                                            image1={product.image1}
                                            image2={product.image2}
                                            name={product.name}
                                            price={product.price} />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Pagination />
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
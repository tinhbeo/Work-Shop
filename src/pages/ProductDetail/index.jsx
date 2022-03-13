import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'
function ProductDetail(props) {
    return (
        <div className='product__detail vh-100 mt-5'>
            <div className="container">
                <div className="row">
                    <div className="product__detail-top">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><NavLink className='text-dark underline' to='/home'>Home</NavLink></li>
                                <li class="breadcrumb-item"><NavLink className='text-dark underline' to='/products'>Products</NavLink></li>
                                <li class="breadcrumb-item active" aria-current="page">Detail</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="col-lg-7">
                            <img className='img-fluid float-end' style={{ height: '500px' }} src="https://vendor.webuildthemes.com/assets/images/demo/product-8.jpg" alt="...." />
                        </div>
                        <div className="col-lg-5">
                            <h1 className='mb-4'>Hajo Backpack</h1>
                            <div className="price">
                                <span className='text-decoration-line-through text-secondary me-2'>$113</span>
                                $99
                            </div>
                            <p className='py-5'>This minimalist backpack is suitable for any occasion. Whether on the road by bike, shopping or in the nightlife.</p>
                            <button className='btn btn-success text-uppercase'>Add to cart</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetail;
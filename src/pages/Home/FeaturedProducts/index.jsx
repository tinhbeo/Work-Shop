import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../../../components/Product';
import ButtonLink from '../../../components/ButtonLink';
import './style.scss'
function FeaturedProducts(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            try {
                const api = 'https://6226c9bc2dfa5240180d2202.mockapi.io/shop/products?page=1&limit=6';
                const respone = await fetch(api);
                const data = await respone.json();
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])
    return (
        <section>
            <div className="container">
                <div className="row mb-5">
                    <h2 className="col col-xl-6 col-lg-6 featured__title">Featured Products</h2>
                    <div className="col col-xl-6 col-lg-6 d-flex justify-content-end align-items-center feartured__link">
                        <NavLink to='/products' className="mx-3 text-uppercase underline">Best sellers</NavLink>
                        <NavLink to='/products' className="mx-3 text-uppercase underline">New Arrivals</NavLink>
                    </div>
                </div>

                <div className="row">
                    {products.map(product => (
                        <div className="col-12 col-md-6 col-lg-4 ">
                            <Product image1={product.image1} image2={product.image2} name={product.name} price={product.price} />
                        </div>
                    ))}
                </div>
                <div className="mt-5 text-center">
                    <ButtonLink text='load more' link='/' />
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
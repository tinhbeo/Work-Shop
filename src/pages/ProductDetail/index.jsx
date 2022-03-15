import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import productApi from '../../api/product';
import Loading from '../../components/Loading';
import './style.scss';

function ProductDetail(props) {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function getProduct() {
            try {
                setLoading(true);
                const respone = await productApi.get(params.id);
                setLoading(false);
                setProduct(respone);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        getProduct();
    }, [params.id])
    return (
        loading ? <Loading /> :
            <div className='product__detail mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="product__detail-top">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className='text-dark underline' to='/home'>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink className='text-dark underline' to='/products'>Products</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Detail</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <section>
                        <div className="row">
                            <div className="col-lg-7">
                                <img className='img-fluid float-end' style={{ height: '500px' }} src={product.image1} alt="...." />
                            </div>
                            <div className="col-lg-5">
                                <h1 className='mb-4'>{product.name}</h1>
                                <div className="price">
                                    <span className='text-decoration-line-through text-secondary me-2'>$113</span>
                                    ${product.price}
                                </div>
                                <p className='py-5'>{product.description}</p>
                                <button className='btn btn-success text-uppercase'>Add to cart</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    );
}

export default ProductDetail;
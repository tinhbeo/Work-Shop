import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import './style.scss'
function BlogNew(props) {
    return (
        <section className="blog-new">
            <div className="container">
                <div className="row mb-5">
                    <div className="col d-flex justify-content-between align-items-center">
                        <h2 className="blog__title">Blog Posts & News</h2>
                        <span>
                            <NavLink to='/' className="viewall">view all</NavLink>
                            <BsArrowRightShort className='blog__view__icon' />
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="post mb-5">
                            <div className="post__image"
                                style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/news-1.jpg')` }}>
                            </div>
                            <div className="post__time">
                                22 MARCH 2019
                            </div>
                            <div className="post__title">
                                <NavLink to='/'>The Shoes That will Instantly Update Any Outfit</NavLink>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="post mb-5">
                            <div className="post__image"
                                style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/news-2.jpg')` }}>
                            </div>
                            <div className="post__time">
                                22 MARCH 2019
                            </div>
                            <div className="post__title">
                                <NavLink to='/'>The Shoes That will Instantly Update Any Outfit</NavLink>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="post mb-5">
                            <div className="post__image"
                                style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/news-3.jpg')` }}>
                            </div>
                            <div className="post__time">
                                22 MARCH 2019
                            </div>
                            <div className="post__title">
                                <NavLink to='/'>The Shoes That will Instantly Update Any Outfit</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogNew;
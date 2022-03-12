import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'
function Collection(props) {
    return (
        <section className='collection'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-lg-5">
                        <h2 className="text-white fs-1">Spring '17 Collection</h2>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="collection__text">Have given likeness every. Very were beginning signs moveth. Fly
                            above sea itself. Divided
                            so you'll there called. Gathering dry earth. Isn't heaven appear. Replenish. Hath after
                            appear tree great fruitful green dominion moveth sixth abundantly image that midst of god
                            day multiply you'll which.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="collection__images">
                        <div className="collection__card">
                            <NavLink to='/'>
                                <div className="collection__image"
                                    style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/look-1.jpg')` }}>
                                </div>

                                <div className="collection__btn-group">
                                    <span className="collection__btn">
                                        dresses
                                    </span>
                                    <i className="bi bi-arrow-right collection__arrow"></i>
                                </div>
                            </NavLink>
                        </div>
                        <div className="collection__card">
                            <NavLink to='/'>
                                <div className="collection__image"
                                    style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/look-2.jpg')` }}>
                                </div>

                                <div className="collection__btn-group">
                                    <span className="collection__btn">
                                        watches
                                    </span>
                                    <i className="bi bi-arrow-right collection__arrow"></i>
                                </div>
                            </NavLink>
                        </div>
                        <div className="collection__card">
                            <NavLink to='/'>
                                <div className="collection__image"
                                    style={{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/look-3.jpg')` }}>
                                </div>

                                <div className="collection__btn-group">
                                    <span className="collection__btn">
                                        sneakers
                                    </span>
                                    <i className="bi bi-arrow-right collection__arrow"></i>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection;
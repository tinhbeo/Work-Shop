import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'
function Footer(props) {
    return (
        <footer className="text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-5">
                        <div className="container">
                            <div className="row">
                                <p className="footer__text">
                                    Thanks to <NavLink to='/' className="text-white underline">Opumo</NavLink> for the product images used in this
                                    demo theme. Head over
                                    to <NavLink to='/' className="text-white underline">their store </NavLink>
                                    to get these products
                                </p>
                            </div>
                            <div className="row">
                                <p className="quick__link">
                                    QUICK LINKS
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <NavLink to='/' className="text-white underline">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className="text-white underline">FAQ</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className="text-white underline">Term of Use</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <NavLink to='/' className="text-white underline">Contact us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/' className="text-white underline">Blog</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5 line">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="w-75">
                                    <p className="text-uppercase">subscribe</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email"
                                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="w-75">
                                    <p className="text-uppercase">folow us</p>
                                    <div className="contact__icons">
                                        <NavLink to='/'><i className="bi bi-facebook"></i></NavLink>
                                        <NavLink to='/'><i className="bi bi-twitter"></i></NavLink>
                                        <NavLink to='/'><i className="bi bi-youtube"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
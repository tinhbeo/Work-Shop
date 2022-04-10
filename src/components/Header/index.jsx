import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsSearch, BsX, BsBag } from "react-icons/bs";
import "./style.scss";
function Header(props) {
    const [searchUI, setSearchUI] = useState(false);
    const [render, setRender] = useState(true);
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        if (pathname === "/admin") {
            setRender(false);
        }
    }, [pathname]);
    return (
        render && (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid flex-row-reverse">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarTogglerDemo02"
                                    aria-controls="navbarTogglerDemo02"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <img
                                    className="d-lg-none"
                                    src="https://vendor.webuildthemes.com/assets/images/logo.svg"
                                    alt="..."
                                />
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarTogglerDemo02"
                                >
                                    <div className="col col-4">
                                        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/home"
                                                    className="nav-link"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/category"
                                                    className="nav-link"
                                                >
                                                    Category
                                                </NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink
                                                    to="/products"
                                                    className="nav-link"
                                                >
                                                    Products
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/docs"
                                                    className="nav-link"
                                                >
                                                    Docs
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col col-4 text-center d-none d-lg-block">
                                        <NavLink to="/home">
                                            <img
                                                src="https://vendor.webuildthemes.com/assets/images/logo.svg"
                                                alt=""
                                            />
                                        </NavLink>
                                    </div>
                                    <div className="col col-4">
                                        <ul className="navbar-nav me-auto mb-2 mb-xl-0 justify-content-end">
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/login"
                                                    className="nav-link"
                                                    role="button"
                                                    aria-expanded="false"
                                                >
                                                    Login
                                                </NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <span
                                                    id="icon-search"
                                                    onClick={() =>
                                                        setSearchUI(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    <BsSearch />
                                                </span>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/cart">
                                                    <span
                                                        className="nav-link"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        <BsBag />
                                                    </span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div
                    className={
                        searchUI ? "header__search active" : "header__search"
                    }
                >
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="search__group">
                            <input
                                type="text"
                                className="text-dark"
                                placeholder="Type your search here"
                            />
                            <span onClick={() => setSearchUI(false)}>
                                <BsX />
                            </span>
                        </div>
                    </form>
                </div>
            </header>
        )
    );
}

export default Header;

import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import orderApi from 'api/order';
import { clearCart } from 'features/addToCart/cartSlice';
import './style.scss';
const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const [show, setShow] = useState(false);

    const store = useSelector((state) => state.cart.store);
    const total = store.reduce((prev, current) => {
        return prev + current.quantity * current.price;
    }, 0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        if (form.checkValidity()) {
            const data = {
                firstName,
                lastName,
                city,
                country,
                phone,
                address,
                items: store,
            };

            orderApi.post(data).then(() => {
                setShow(true);
                dispatch(clearCart());
            });
        }
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handlecCountryChange = (e) => {
        setCountry(e.target.value);
    };
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleClose = () => {
        setShow(false);
        navigate('/home');
    };
    return (
        <div className="checkout">
            <section className="top">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <NavLink className="text-dark underline" to="/home">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item">
                                    <NavLink className="text-dark underline" to="/cart">
                                        Cart
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Checkout
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <h3 className="text-center text-uppercase fw-light fs-1">checkout</h3>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="mb-0 fw-light">Infomations</h3>
                                </div>
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4">
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="firstName">First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="firstName"
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide first name
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="lastName"
                                                onChange={handleLastNameChange}
                                                value={lastName}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide last name
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="lastName">Phone number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                id="phone"
                                                onChange={handlePhoneChange}
                                                value={phone}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your phone number
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="country">Country</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="country"
                                                onChange={handlecCountryChange}
                                                value={country}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your country
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="city">City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="city"
                                                value={city}
                                                onChange={handleCityChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your city
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="address">Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="address"
                                                value={address}
                                                onChange={handleAddressChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your address
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Button type="submit" variant="success" className="p-2 text-uppercase w-100">
                                            Order
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_detail">
                                <div className="card text-dark bg-light mb-3">
                                    <div className="card-header py-3">
                                        <p className="mb-0">Order Summary</p>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            {store.map((item) => {
                                                return (
                                                    <li key={item.id}>
                                                        <span>
                                                            {item.name} x {item.quantity}
                                                        </span>
                                                        <span>${item.price * item.quantity}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <ul>
                                            <li className="mb-0 fs-5">
                                                <span>Total</span>
                                                <span>${total}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Order Success</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Oke
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Checkout;

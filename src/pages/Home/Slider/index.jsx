import imageSlide1 from 'assets/image/background-1.jpg';
import imageSlide2 from 'assets/image/background-2.jpg';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { Autoplay, Lazy, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/lazy';
import 'swiper/scss/navigation';
import './style.scss';

function Slider(props) {

    return (
        <Swiper
            modules={[Autoplay, Navigation, Lazy]}
            navigation={{
                nextEl: '.slider__button-next',
                prevEl: '.slider__button-prev'
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            lazy={true}
        >
            <SwiperSlide>
                <div className="slider"
                    style={{ backgroundImage: `url(${imageSlide1})` }}>
                    <div className="container">
                        <div className="row vh-100 align-items-center w-100">
                            <div className="slider__content">
                                <h1 className="mb-2 fw-light slider__title">
                                    Brand new
                                    <b className="fw-bold"> Sunglassess</b>
                                </h1>
                                <NavLink to='/products' className="btn btn-arrow">
                                    Shop now
                                    <span className="span-arrow"><BsArrowRight /></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider"
                    style={{ backgroundImage: `url(${imageSlide2})` }}>
                    <div className="container">
                        <div className="row vh-100 align-items-center">
                            <div className="slider__content">
                                <h1 className="mb-2 fw-light slider__title">
                                    Fashion week
                                    <b className="fw-bold"> Look book '19</b>
                                </h1>
                                <NavLink to='/products' className="btn btn-arrow">
                                    Shop now
                                    <span className="span-arrow"><BsArrowRight /></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className='slider__button__group'>
                <button className="slider__button slider__button-prev">
                    <BsArrowLeft />
                </button>
                <button className="slider__button slider__button-next">
                    <BsArrowRight />
                </button>
            </div>
        </Swiper>
    );
}

export default Slider;
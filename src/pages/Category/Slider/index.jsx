import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import imageSlide4 from 'assets/image/background-4.jpg';
import imageSlide5 from 'assets/image/background-5.jpg';
import "swiper/scss";
import ButtonLink from "components/ButtonLink";
import "./style.scss";
function Slider(props) {
    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: ".category__slide__btn-right",
                prevEl: ".category__slide__btn-left",
            }}
            loop={true}
        >
            <SwiperSlide>
                <div
                    className="category__slide"
                    style={{
                        backgroundImage: `url(${imageSlide4})`,
                    }}
                >
                    <div className="category__slide__content">
                        <h1 className="text-white">
                            Your perfect workspace is waiting for you.
                        </h1>
                        <ButtonLink text="shop now" link="/" />
                    </div>
                    <button className="category__slide__btn category__slide__btn-left">
                        <BsArrowLeft />
                    </button>
                    <button className="category__slide__btn category__slide__btn-right">
                        <BsArrowRight />
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="category__slide"
                    style={{
                        backgroundImage: `url(${imageSlide5})`,
                    }}
                >
                    <div className="category__slide__content">
                        <h1 className="text-white">
                            Transform your home with us.
                        </h1>
                        <ButtonLink text="shop now" link="/" />
                    </div>
                    <button className="category__slide__btn category__slide__btn-left">
                        <BsArrowLeft />
                    </button>
                    <button className="category__slide__btn category__slide__btn-right">
                        <BsArrowRight />
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;

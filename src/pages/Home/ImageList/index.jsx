import React from 'react';
import { FreeMode, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import instagram1 from 'assets/image/instagram-1.jpg';
import instagram2 from 'assets/image/instagram-2.jpg';
import instagram3 from 'assets/image/instagram-3.jpg';
import instagram4 from 'assets/image/instagram-4.jpg';
import instagram5 from 'assets/image/instagram-5.jpg';
import 'swiper/scss';
import 'swiper/scss/lazy';
import './style.scss'
function ImageList(props) {
    return (
        <Swiper
            modules={[FreeMode, Lazy]}
            className="images mb-3"
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            lazy={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
        >
            <SwiperSlide>
                <div>
                    <img className="image__slider" src={instagram1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src={instagram2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src={instagram3} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src={instagram4} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src={instagram5} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default ImageList;
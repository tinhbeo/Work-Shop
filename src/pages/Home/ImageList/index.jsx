import React from 'react';
import { FreeMode, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/lazy';
import './style.scss'
function ImageList(props) {
    return (
        <Swiper
            modules={[FreeMode, Lazy]}
            className="images mb-3 row"
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
                    <img className="image__slider" src="https://vendor.webuildthemes.com/assets/images/instagram-1.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src="https://vendor.webuildthemes.com/assets/images/instagram-2.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src="https://vendor.webuildthemes.com/assets/images/instagram-3.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src="https://vendor.webuildthemes.com/assets/images/instagram-4.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="image__slider" src="https://vendor.webuildthemes.com/assets/images/instagram-5.jpg" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default ImageList;
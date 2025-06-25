import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 20,


            },
            1439: {
                slidesPerView: 4.1,
                spaceBetween: 20,

            },
        },

        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.gallery-custom-next',
            prevEl: '.gallery-custom-prev',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
    new Swiper('.reviews-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: 4,
                spaceBetween: 10,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'reviews-swiper-slide',
        wrapperClass: 'reviews-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            prevEl: '.reviews-custom-prev',
            nextEl: '.reviews-custom-next',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
});
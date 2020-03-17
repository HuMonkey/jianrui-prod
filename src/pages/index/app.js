import './app.less';
import {navToggle} from '../../assets/js/util'; 
import Swiper from '../../assets/js/swiper.min.js';

window.onload = function() {
    const mySwiper = new Swiper('.pc .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000
        }
    });

    // MOBILE
    navToggle();
    $('.products').on('click', function() {
        const toggle = $(this).attr('toggle');
        const arrow = $(this).find('.arrow');
        if (toggle == 0) {
            $(this).attr('toggle', 1)
            const height = $('.sublist .inner').height();
            $('.sublist').css({
                height
            })
            arrow.css({
                transform: 'rotate(90deg)'
            })
        } else {
            $(this).attr('toggle', 0)
            $('.sublist').css({
                height: '0',
            })
            arrow.css({
                transform: 'none'
            })
        }
        
    })
    new Swiper('.mobile .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000
        }
    })
}

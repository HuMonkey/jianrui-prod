import togglerPng from '../img/m-toggler.png';
import closePng from '..//img/m-close.png';

const navToggle = function() {
    $('.toggler').on('click', function() {
        const toggle = $(this).attr('toggle');
        if (toggle == 0) {
            $(this).attr('toggle', 1);
            $(this).attr('src', closePng);
            $('.main, .navbar, .mfooter').css({
                left: '-6rem'
            });
            $('.navs').css({
                right: '0'
            });
            setTimeout(function() {
                $('.navs .row, .navs .subrow').animate({
                    left: '0'
                }, 200);
            }, 100)
        } else {
            $(this).attr('toggle', 0);
            $(this).attr('src', togglerPng);
            $('.main, .navbar, .mfooter').css({
                left: '0'
            });
            $('.navs').css({
                right: '-6rem'
            });
            $('.navs .row, .navs .subrow').css({
                left: '-375px'
            });
        }
    });
}

export {
    navToggle
}
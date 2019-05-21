$(document).on('click','.js-open-menu', function (evt) {
    evt.preventDefault();
    $('body').toggleClass('open-menu');
    $('html').toggleClass('overflow-hidden'); 
});

$('.js-close-menu').on('click', function (evt) {
    evt.preventDefault();
    $('body').removeClass('open-menu');
    $('html').removeClass('overflow-hidden');       
});


var $scrolltop = $('.js-scroll-top');

$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $scrolltop.fadeIn();
    } else {
        $scrolltop.fadeOut();
    }
});

$scrolltop.click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
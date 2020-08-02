$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendDots:$('.arrow-wrapper'),
        appendArrows:$('.arrow-wrapper'),
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
});
    $('.slick-arrow').blur();

});

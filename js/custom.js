var owl = $('.banner-section .owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})



document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "light"
        });
    }
);
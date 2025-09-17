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



// Mobile - Menu ----------
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "left-front"
            },
            "theme": "light",
            "iconbar": {
                "use": true,
                "top": [
                    "<a href='#/'><i class='fa fa-home'></i></a>",
                ],
                "bottom": [
                    "<a href='#/'><i class='fa-regular fa-heart'></i></a>",
                    "<a href='#/'><i class='fa-solid fa-cart-shopping'></i></a>",
                ]
            },
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        "searchfield"
                    ]
                }
            ]
        });
    }
);

const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

// smooth scroll to anchor, with option of hash appearing in url. Thanks:
// https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            // window.location.hash = target;
        });
    });
});

$(document).ready(function () {
    $('.nav li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});
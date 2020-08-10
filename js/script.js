// var width = document.getElementsByTagName('BODY')[0].offsetWidth;
// var height = document.getElementsByTagName('BODY')[0].offsetHeight;
// console.log(width);
// console.log(height)
// alert("width: " + width + " height: " + height);

var homePage = gsap.timeline({ paused: true });
var productsPage = gsap.timeline({ paused: true });
var boardsPage = gsap.timeline({ paused: true });

$(document).ready(function () {

    if (("standalone" in window.navigator) && window.navigator.standalone) {
        // For iOS Apps
        $('a').on('click', function (e) {
            e.preventDefault();
            var new_location = $(this).attr('href');
            if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined) {
                window.location = new_location;
            }
        });
    }

    $('.slick-container').slick({
        dots: true,
        infinite: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/right-arrow.png'>"
    });
});

window.onload = function () {
    var slickContainer = document.querySelector('.slick-container');
    var slickTrack = document.querySelector('.slick-track')
    // slickContainer.addEventListener('touchmove', function () {
    //     var style = window.getComputedStyle(slickTrack);
    //     var matrix = new WebKitCSSMatrix(style.webkitTransform);
    //     console.log('translateX: ', matrix.m41);
    //     console.log(matrix.m41 % 768)
    //     gsap.to('.product-01', { y: (matrix.m41 % 768 / 7.68) + "%"});
    // }, false)


    // console.log($('.product-container').slick.$slides.get(index))

    // var move = gsap.timeline({ paused: true });
    // // var currentIndex = 
    // move
    //     .addLabel('start')
    //     .to('.product', .3, { opacity: 0, y: 10, ease: Power2.easeOut, stagger: .05 }, 'start')
    //     .to('.title', .3, { opacity: 0, scale: .8, ease: Power2.easeOut, stagger: .05 }, 'start+=' + .05)
    //     .to('.txt-1', .3, { opacity: 0, x: 10, stagger: .1 }, 'start+=' + .05)
    //     .to('.txt-2', .3, { opacity: 0, x: 10, stagger: .1 }, 'start+=' + .05)
    //     .to('.tip', .3, { opacity: 0, x: 10, stagger: .1 }, 'start+=' + .05)



    // slickContainer.addEventListener('touchmove', function () {

    //     move.play();
    // }, false);
    // slickContainer.addEventListener('touchend', function () {
    //     var index = document.querySelector('.slick-slide').dataset.slickIndex;
    //     console.log(index);

    //     move.reverse();
    // }, false);

    if (document.querySelector('.container-home')) {
        homePage
            .addLabel('start')
            .to('.apresenta-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .1)
            .to('.flag-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start')
            .to('.txt-mask', 1, { x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
            .to('.flag-txt-anim', 1, { x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
            .to('.sec-logo-anim', .7, { opacity: 1, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .7)
            .to('.logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .3 }, 'start+=' + .7)
            .to('.logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .9)
            .to('.home-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + 1.3)
            .to('.produtos-link-wrapper, .tabuas-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + 2)
            .to('.link-txt-anim', { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + 2.2)
            .to('.products-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .7)
        homePage.play();

    } else if (document.querySelector('.container-products')) {
        productsPage
            .addLabel('start')
            .to('.top-garlic, .bottom-garlic', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .1)
            .to('.small-logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .2)
            .to('.small-logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .3)
            .to('.products-title', .7, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .3)
            .to('.back-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .5)
            .to('.back-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .6)
            .to('.slick-container', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .5)
        productsPage.play();

        // $('.slick-container').on('beforChange', function(event, slick, currentSlide, nextSlide) {
        //     console.log(currentSlide);
        //     setTimeout(function(){
        //         gsap.to('.slick-active .product-container', .7, {y: 50, opacity: 1, stagger: .2})
        //     }, 200)
        // })

    } else if (document.querySelector('.container-boards')) {
        boardsPage
            .addLabel('start')
            .to('.top-garlic, .bottom-garlic', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .1)
            .to('.small-logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .2)
            .to('.small-logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .3)
            .to('.products-title', .7, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .3)
            .to('.back-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .5)
            .to('.back-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .6)

        boardsPage.play();
    }
};

//EVENTS
try {
    var productsCta = document.querySelector('.produtos-link');
    productsCta.addEventListener('click', function () {
        gsap.to('.apresenta-anim, .flag-anim, .flag-txt-anim, .sec-logo-anim, .logo-txt-anim, .logo-anim, .home-txt-anim, .tabuas-link-wrapper, .products-anim', .3, { opacity: 0 });
        gsap.to('.produtos-link-wrapper', .3, { opacity: 0, delay: .3 });
        setTimeout(function () {
            window.location = 'products.html';
        }, 600);
    });
} catch (err) { }

try {
    var boardsCta = document.querySelector('.tabuas-link');
    boardsCta.addEventListener('click', function () {
        setTimeout(function () {
            window.location = 'boards.html';
        }, 500);
    });
} catch (err) { }

try {
    var backCta = document.querySelector('.back-link');
    backCta.addEventListener('click', function () {
        setTimeout(function () {
            window.location = 'index.html';
        }, 500);
    });
} catch (err) { }
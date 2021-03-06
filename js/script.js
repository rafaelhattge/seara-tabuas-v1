var homePage = gsap.timeline({ paused: true });
var productsPage = gsap.timeline({ paused: true });
var boardsPage = gsap.timeline({ paused: true });

$(document).ready(function () {
    $('.slick-products').slick({
        dots: true,
        infinite: true,
        touchThreshold: 30,
        speed: 300,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/right-arrow.png'>"
    });

    $('.slick-boards').slick({
        dots: true,
        fade: true,
        infinite: true,
        touchThreshold: 30,
        speed: 300,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/right-arrow.png'>"
    });
});

window.onload = function () {
    homePage
        .addLabel('start')
        .to('.emporio-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start')
        .to('.apresenta-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .1)
        .to('.flag-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start')
        .to('.txt-mask', 1, { x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
        .to('.flag-txt-anim', 1, { opacity: 1, x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
        .to('.sec-logo-anim', .7, { opacity: 1, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .7)
        .to('.logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .3 }, 'start+=' + .7)
        .to('.logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .9)
        .to('.home-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + 1.3)
        .to('.produtos-link-wrapper, .tabuas-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + 2)
        .to('.link-txt-anim', { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + 2.2)
        .to('.products-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .7)
        .timeScale(2)
    homePage.play();

    productsPage
        .addLabel('start')
        .to('.container-products', .01, { visibility: "visible", ease: Power2.easeOut }, 'start')
        .to('.slick-products', .01, { visibility: "visible", ease: Power2.easeOut }, 'start')
        .to('.top-garlic, .bottom-garlic', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .1)
        .to('.small-logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .2)
        .to('.small-logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .3)
        .to('.products-title', .7, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .3)
        .to('.back-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .5)
        .to('.back-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .6)
        .to('.slick-products', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .5)

    boardsPage
        .addLabel('start')
        .to('.container-boards', .01, { visibility: "visible", ease: Power2.easeOut }, 'start')
        .to('.slick-boards', .01, { visibility: "visible", ease: Power2.easeOut }, 'start')
        .to('.top-garlic, .bottom-garlic', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .1)
        .to('.small-logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .2)
        .to('.small-logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .3)
        .to('.products-title', .7, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .3)
        .to('.back-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .5)
        .to('.back-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .6)
        .to('.slick-boards', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .5)
}

//EVENTS
try {
    var productsCta = document.querySelector('.produtos-link');
    productsCta.addEventListener('click', function () {
        gsap.to('.produtos-link-wrapper', .1, {scale: 1.05});
        gsap.to('.produtos-link-wrapper', .1, {scale: 1, delay: .1});
        gsap.to('.emporio-anim, .apresenta-anim, .flag-anim, .flag-txt-anim, .sec-logo-anim, .logo-txt-anim, .logo-anim, .home-txt-anim, .tabuas-link-wrapper, .products-anim', .3, { opacity: 0 });
        gsap.to('.produtos-link-wrapper', .3, { opacity: 0 });
        setTimeout(function () {
            productsPage.play();
        }, 600);
    });

} catch (err) { }

try {
    var boardsCta = document.querySelector('.tabuas-link');
    boardsCta.addEventListener('click', function () {
        gsap.to('.tabuas-link-wrapper', .1, {scale: 1.05});
        gsap.to('.tabuas-link-wrapper', .1, {scale: 1, delay: .1});
        gsap.to('.emporio-anim, .apresenta-anim, .flag-anim, .flag-txt-anim, .sec-logo-anim, .logo-txt-anim, .logo-anim, .home-txt-anim, .produtos-link-wrapper, .products-anim', .3, { opacity: 0 });
        gsap.to('.tabuas-link-wrapper', .3, { opacity: 0 });
        setTimeout(function () {
            boardsPage.play();
        }, 500);
    });
} catch (err) { }

try {
    var backCta = document.querySelector('.back-link');
    backCta.addEventListener('click', function () {
        gsap.to('.back-link-wrapper', .1, {scale: 1.05});
        gsap.to('.back-link-wrapper', .1, {scale: 1, delay: .1});
        productsPage
            .timeScale(2)
            .reverse();
        boardsPage
            .timeScale(2)
            .reverse();
        setTimeout(function () {
            homePage.restart();
        }, 900);
    })
    // document.querySelectorAll(".back-link").forEach(function (elem) {
    //     elem.addEventListener("click", function () {
    //         productsPage
    //             .timeScale(2)
    //             .reverse();
    //         boardsPage
    //             .timeScale(2)
    //             .reverse();
    //         setTimeout(function () {
    //             homePage.restart();
    //         }, 900);
    //     });
    // });



    // var backCta = document.querySelector('.back-link');
    // backCta.addEventListener('click', function () {

    // });
} catch (err) { }
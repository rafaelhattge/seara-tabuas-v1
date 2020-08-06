// var width = document.getElementsByTagName('BODY')[0].offsetWidth;
// var height = document.getElementsByTagName('BODY')[0].offsetHeight;
// console.log(width);
// console.log(height)
// alert("width: " + width + " height: " + height);

var homePage = gsap.timeline({ paused: true });
var productsPage = gsap.timeline({ paused: true });
var boardsPage = gsap.timeline({ paused: true });
// switch (window.location.pathname) {
//     case "/index.html":
homePage
    .addLabel('start')
    .to('.apresenta-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .1)
    .to('.flag-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start')
    .to('.txt-mask', 1, { x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
    .to('.flag-txt-anim', 1, { x: "0%", ease: Power2.easeOut }, 'start+=' + .5)
    .to('.logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .3 }, 'start+=' + .7)
    .to('.logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .9)
    .to('.home-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + 1.3)
    .to('.produtos-link-wrapper, .tabuas-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + 2)
    .to('.link-txt-anim', { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + 2.2)
    .to('.products-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .7)
homePage.play();

// break;

// case "/products.html":
productsPage
    .addLabel('start')
    .to('.top-garlic, .bottom-garlic', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .1)
    .to('.small-logo-anim', .7, { opacity: 1, scale: 1, ease: Power2.easeOut }, 'start+=' + .2)
    .to('.small-logo-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut }, 'start+=' + .3)
    .to('.back-txt-anim', .7, { opacity: 1, y: 0, ease: Power2.easeOut, stagger: .2 }, 'start+=' + .5)
    .to('.back-link-wrapper', .5, { opacity: 1, ease: Power2.easeOut }, 'start+=' + .6)
productsPage.play();
// }

//EVENTS
try {
    var productsCta = document.querySelector('.produtos-link');
    productsCta.addEventListener('click', function () {
        gsap.to('.apresenta-anim, .flag-anim, .flag-txt-anim, .logo-txt-anim, .logo-anim, .home-txt-anim, .tabuas-link-wrapper, .products-anim', .3, { opacity: 0 });
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
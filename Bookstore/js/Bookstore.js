const MenuOpenButton = document.querySelector("#menu-open-button");
const MenuCloseButton = document.querySelector("#menu-close-button");
 

MenuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

MenuCloseButton.addEventListener("click", () => MenuOpenButton.click());

//Menu swiper
let swiperMenu = new Swiper('.menu .menu-container .menu-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});
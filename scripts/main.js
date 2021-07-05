const swiper = new Swiper('.slider-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 38,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    breakpoints: {
        220: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 38
        },
        1325: {
            slidesPerView: 3,
            spaceBetween: 38
        }
    }

});

//функцйия добавления формы в колонку
window.addEventListener('resize', function () {
    const requestDescription = document.querySelector('.request__description');
    const requestForm = document.querySelector('.requst__form');
    const requestWrapper = document.querySelector('.request__wrapper');
    if (document.documentElement.clientWidth < 1118) {
        requestDescription.appendChild(requestForm);
    } else {
        requestWrapper.appendChild(requestForm)
    };
});

//Вызов мобильного меню
(function () {
    const burgerMenu = document.querySelector('.burger');
    const burgerClose = document.querySelector('.burger-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    burgerMenu.addEventListener('click', function () {
        mobileMenu.classList.add('mobile-menu--active')
    });
    burgerClose.addEventListener('click',function(){
        mobileMenu.classList.remove('mobile-menu--active')
    });

}());

//аккордеон на jq 
$('.mobile-list').on('click','.mobile-button',function(e){
    e.preventDefault();
    $(this)
    .next('.mobile-submenu')
    .not(':animated')
    .slideToggle();
});


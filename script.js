var swiper = new Swiper('.swiper', {
    loop: true,
    speed: 3000,
    // autoplay: {
    //     delay: 1000,
    //     reverseDirection:true,
    //     // stopOnLastSlide:true
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 200,
        depth: 250,
        modifier: -1,
        slideShadows: true,
       
    },

  watchSlidesProgress:true,
 
});
const swiperr = document.querySelector('.swiper').swiper;

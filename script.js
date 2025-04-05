var swiper = new Swiper('.swiper', {
    loop: true,
    speed: 3000,
    // autoplay: {
    //     delay: 1000,
    //     reverseDirection:true,
    //     // stopOnLastSlide:true
    // },
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 120,   // اسلایدها نزدیک‌تر می‌شن
      depth: 200,     // عمق کم برای افکت ملایم
      modifier: 1,
      slideShadows: false
    },

  watchSlidesProgress:true,
 
});
const swiperr = document.querySelector('.swiper').swiper;

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


//owl-pro
$(function(){
  $('#owl-pro').owlCarousel({
              rtl: true,
              loop: true,
              margin: 10,
              nav:false,
              dots:false,
              // autoplay:true,
              // autoplayTimeout: 3000,
              // autoplayHoverPause: true,
              responsive:{
                  0:{
                      items: 2
                  },
                  576:{
                      items: 3
                  },
                  768:{
                      items: 3
                  },
                  992:{
                      items: 9
                  },
                  1600:{
                      items: 9.5
                  }
              }
  })
})


//sale
$(function(){
  $('#sale-owl-one').owlCarousel({
              rtl: true,
              loop: true,
              margin: 10,
              nav:false,
              dots:false,
              // autoplay:true,
              // autoplayTimeout: 3000,
              // autoplayHoverPause: true,
              responsive:{
                  0:{
                      items: 2
                  },
                  576:{
                      items: 3
                  },
                  768:{
                      items: 3
                  },
                  992:{
                      items: 4
                  },
                  1600:{
                      items: 4.5
                  }
              }
  })
})
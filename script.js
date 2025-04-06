var swiper = new Swiper('#my-swiper', {
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
        stretch: 150,
        depth: 200,
        modifier: -0.5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
      },

  watchSlidesProgress:true,
 
});
const swiperr = document.querySelector('#my-swiper').swiper;

    let nextbtn=document.querySelector('.slider-right');
    nextbtn.addEventListener('click',function(){
        swiperr.slidePrev();
    })
    let prevbtn=document.querySelector('.slider-left');
    prevbtn.addEventListener('click',function(){
        swiperr.slideNext();
    })
    // const heroSlider=document.querySelector('#my-swiper');
    // heroSlider.addEventListener('mouseenter', function(){
    //     // swiper.stop();
    // })


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
                  1200:{
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
            //   margin: 10,
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
                  1200:{
                      items: 4.5
                  }
              }
  })
})
$('#one-right').click(function() {
    $('#sale-owl-one').trigger('prev.owl.carousel');
});

$('#one-left').click(function() {
    $('#sale-owl-one').trigger('next.owl.carousel');
});

//product-swiper
var swiper = new Swiper('#my-swiper-2', {
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
        stretch: 80,
        depth: 0,
        modifier: -0.5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
      },

  watchSlidesProgress:true,
 
});

//most sale
$(function(){
    $('#sale-owl-two').owlCarousel({
                rtl: true,
                loop: true,
                margin: 5,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    480:{
                        items: 2.5
                    },
                    576:{
                        items: 3
                    },
                    680:{
                        items: 3.5
                    },
                    768:{
                        items: 4
                    },
                    860:{
                        items: 4.5
                    },
                    1060:{
                        items: 5,
                    },
                  
                }
    })
})
$('#one-right').click(function() {
    $('#sale-owl-two').trigger('prev.owl.carousel');
});

$('#one-left').click(function() {
    $('#sale-owl-two').trigger('next.owl.carousel');
});

//category
$(function(){
    $('#owl-category').owlCarousel({
                rtl: true,
                loop: true,
                margin: 5,
                nav:false,
                dots:false,
                responsive:{
                    0:{
                        items: 2
                    },
                    480:{
                        items: 2.5
                    },
                    576:{
                        items: 3
                    },
                    680:{
                        items: 3.5
                    },
                    768:{
                        items: 4
                    },
                    860:{
                        items: 4.5
                    },
                    1060:{
                        items: 6,
                    },
                  
                }
    })
})

//most-sale-2
$(function(){
    $('#sale-owl-three').owlCarousel({
                rtl: true,
                loop: true,
                margin: 5,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    480:{
                        items: 2.5
                    },
                    576:{
                        items: 3
                    },
                    680:{
                        items: 3.5
                    },
                    768:{
                        items: 4
                    },
                    860:{
                        items: 4.5
                    },
                    1060:{
                        items: 5,
                    },
                  
                }
    })
})
$('#one-right').click(function() {
    $('#sale-owl-two').trigger('prev.owl.carousel');
});

$('#one-left').click(function() {
    $('#sale-owl-two').trigger('next.owl.carousel');
});

//most-sale-2
$(function(){
    $('#sale-owl-four').owlCarousel({
                rtl: true,
                loop: true,
                margin: 5,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    480:{
                        items: 2.5
                    },
                    576:{
                        items: 3
                    },
                    680:{
                        items: 3.5
                    },
                    768:{
                        items: 4
                    },
                    860:{
                        items: 4.5
                    },
                    1060:{
                        items: 5,
                    },
                  
                }
    })
})
$('#one-right').click(function() {
    $('#sale-owl-two').trigger('prev.owl.carousel');
});

$('#one-left').click(function() {
    $('#sale-owl-two').trigger('next.owl.carousel');
});
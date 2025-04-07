function convertNumbersToFarsi() {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    
   
    function convertToFarsi(str) {
        return str.replace(/\d/g, function(d) {
            return persianDigits[d];
        });
    }

    const walk = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    while (node = walk.nextNode()) {
        if (/\d/.test(node.textContent)) {
            node.textContent = convertToFarsi(node.textContent);
        }
    }
}


document.addEventListener('DOMContentLoaded', convertNumbersToFarsi);

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            convertNumbersToFarsi();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

convertNumbersToFarsi();





//header

$('document').ready(function(){
    $('.equip-header').on('mouseenter',function(){
        $('.pro-equip').addClass('active');
        $('.overlay-main').addClass('active');
        $('body').css('overflow','hidden');
        var tabs = $(".p-tab");
    var firstTab = tabs.first();
    var firstTabContent = $("#" + firstTab.data("tab"));
  
    firstTab.addClass("active");
    firstTabContent.addClass("active");
    $(tabs).on("click", function () {
      $(".p-tab.active , .p-content.active").removeClass("active");
      $(this).addClass("active");
      $("#" + $(this).data("tab")).addClass("active");
    });
  
        
    })
    $('body').on('mouseover',function(e){
        if(!e.target.closest('.pro-equip')&& !e.target.closest('.equip')){ 
            $('.pro-equip').removeClass('active');
            $('.overlay-main').removeClass('active');
            $('body').css('overflow','auto');
      $(".p-tab.active , .p-content.active").removeClass("active");

        }
    })

    
  })

  //user - cart
  $('.user-btn').on('mouseenter',function(){
    $('.user-menu').addClass('active'); 
  })
  
  $('.cart-header').on('mouseenter',function(){
    $('.cart-menu-container').addClass('active');
    
  })
  
  $('body').on('mouseover',function(e){
    if(!e.target.closest('.user')&& !e.target.closest('.basket')){
    $('.user-menu').removeClass('active');
    $('.cart-menu-container').removeClass('active');
    }
  })

  //fix-chat

$('.fix-chat').on('click',function(){
    $('.chat-box').toggleClass('active');
})
$('.chat-box i').on('click', function(){
    $('.chat-box').removeClass('active');

})
$('body').on('click',function(e){
    if(!e.target.closest('.fix-chat')&&!e.target.closest('.chat-box')){
        $('.chat-box').removeClass('active');

    }
  })

  $(function(){
    let hideChat= true;
    $(window).scroll(function() {
       
        const currentScroll = $(this).scrollTop();
            if (currentScroll > 200 && hideChat) {
               $('.chat-box').addClass('active');
               
               console.log(hideChat);
               
            }
})
$('.chat-box i').on('click', function(){
    hideChat= false;

})
})

  //hero-swiper
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
                      items: 3.2
                  },
                  480:{
                    items:3.8
                  },
                  600:{
                      items:4.7
                  },
                  700:{
                    items: 5.5
                },
                  800:{
                    items: 6.5
                },

                  992:{
                      items: 8.5
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
                  550:{
                      items: 2.2
                  },
                  610:{
                      items: 2.5
                  },
                  700:{
                    items: 3
                },
                  768:{
                      items: 3.2
                  },
                  850:{
                    items: 3.5
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

//timer
$(document).ready(function() {
    
    let totalTime = (1 * 60 * 60 * 1000) + (49 * 60 * 1000) + (20 * 1000);
    let countDownDate = new Date().getTime() + totalTime;

    
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        
        if (distance < 0) {
            clearInterval(x);
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
        }
    }, 1000);
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
var swiper = new Swiper('#my-swiper-3', {
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
$('#two-right').click(function() {
    $('#sale-owl-two').trigger('prev.owl.carousel');
});

$('#two-left').click(function() {
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
//---------------categories-make-carousel
$(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.circle-category')
        if (window.innerWidth > 992) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 992) {
            if (!$('.circle-category').hasClass('owl-carousel')) {
                $('.circle-category').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    
                    dots: true,
                    loop: true,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        576: {
                            items: 4
                        },
                        768: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        },
                        
                    }
                });
            }
        }
    };

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});

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
$('#three-right').click(function() {
    $('#sale-owl-three').trigger('prev.owl.carousel');
});

$('#three-left').click(function() {
    $('#sale-owl-three').trigger('next.owl.carousel');
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
$('#four-right').click(function() {
    $('#sale-owl-four').trigger('prev.owl.carousel');
});

$('#four-left').click(function() {
    $('#sale-owl-four').trigger('next.owl.carousel');
});

//---------------brands-make-carousel
$(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.brand-items')
        if (window.innerWidth > 768) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 768) {
            if (!$('.brand-items').hasClass('owl-carousel')) {
                $('.brand-items').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    
                    dots: true,
                    loop: true,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        576: {
                            items: 4
                        },
                        768: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        },
                        
                    }
                });
            }
        }
    };

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});
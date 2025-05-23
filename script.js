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




//off-canvas:

$('.bar-menu i').on('click', function(){
    $('.off-canvas').addClass('active');
    $('.overlay').addClass('active');
    $('body').css('overflow','hidden');
    
  })
  $('.close-btn').on('click',function(){
    $('.off-canvas').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').css('overflow','auto');
  
  })
  $(document).ready(function() {
  
    $('.category-btn').on('click', function(e) {
        e.preventDefault();
        $('.submenu.level-1').addClass('active');
    });
  
  
    $('.subcategory-btn').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.submenu-item').find('.submenu.level-2').addClass('active');
    });
  
  
    $('.back-btn').on('click', function() {
        $(this).closest('.submenu').removeClass('active');
    });
  
  
    $('.close-btn').on('click', function() {
        $('.submenu').removeClass('active');
    });
  });
  $('body').on('click',function(e){
    if(!e.target.closest('.off-canvas')&&!e.target.closest('.bar-menu i')&&!e.target.closest('.fixed-phone')&&!e.target.closest('.pro-equip')&& !e.target.closest('.equip')){
        $('.off-canvas').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').css('overflow','auto');
      
  
    }})


 //header-down moviing up header-top fix
//  $(document).ready(function() {
//     const headerMoving=()=>{
//       const $header = $('header');
//       const $headerContainer = $('.header-container');
//       const $mainHeader = $('.header-back');
//       const $downHeader = $('.header-down');
//       const $advertise = $('.advertise');
//       const $resSearch= $('.res-search');
//       const resSearchHeight=$resSearch.outerHeight();
//       const downHeaderHeight = $downHeader.outerHeight();
//       const mainHeaderHeight = $mainHeader.outerHeight();
//       const adHeaderHeight = $advertise.outerHeight();

//       let lastScrollTop = 0;
//       let isHeaderVisible = true;
    
//       if (window.innerWidth > 990) {
//         const headerHeight= mainHeaderHeight + downHeaderHeight ;
//         const totalHeight = mainHeaderHeight + downHeaderHeight + adHeaderHeight;
//         $headerContainer.css('height', headerHeight);
//         $('body').css('padding-top', totalHeight);
//         $(window).scroll(function() {
    
//           const currentScroll = $(this).scrollTop();
          
//           if (currentScroll > 50) {
//             if (currentScroll > lastScrollTop && isHeaderVisible) {
//               $mainHeader.addClass('lg-header-up');
//               $downHeader.addClass('header-hidden');
//               $headerContainer.css('height', mainHeaderHeight+adHeaderHeight);
//               isHeaderVisible = false;
//             } else if (currentScroll < lastScrollTop && !isHeaderVisible) {
//               $mainHeader.removeClass('lg-header-up');
//               $downHeader.removeClass('header-hidden'); 
//               $headerContainer.css('height', headerHeight);
//               isHeaderVisible = true;
//             }
//           } else {
//             $mainHeader.removeClass('lg-header-up');
//             $downHeader.removeClass('header-hidden');
//             $headerContainer.css('height', headerHeight);
//             isHeaderVisible = true;
//           }
          
//           lastScrollTop = currentScroll;
          
//         });
    
//       }else if(window.innerWidth < 990){
//         const headerHeight= mainHeaderHeight + resSearchHeight ;
//         const totalHeight = mainHeaderHeight + resSearchHeight + adHeaderHeight;
//         $headerContainer.css('height', headerHeight);
//         $('body').css('padding-top', totalHeight);
    
//         $(window).scroll(function() {
    
//           const currentScroll = $(this).scrollTop();
          
//           if (currentScroll > 50) {
//             if (currentScroll > lastScrollTop && isHeaderVisible) {
//               $mainHeader.addClass('lg-header-up');
//               $resSearch.addClass('header-hidden');
//               $headerContainer.css('height', mainHeaderHeight);
//               isHeaderVisible = false;
//             } else if (currentScroll < lastScrollTop && !isHeaderVisible) {
//               $mainHeader.removeClass('lg-header-up');
//               $resSearch.removeClass('header-hidden'); 
//               $headerContainer.css('height', headerHeight);
//               isHeaderVisible = true;
//             }
//           } else {
//             $mainHeader.removeClass('lg-header-up');
//             $resSearch.removeClass('header-hidden');
//             $headerContainer.css('height', headerHeight);
//             isHeaderVisible = true;
//           }
          
//           lastScrollTop = currentScroll;
        
       
//         });
    
//       }
//     }
//     headerMoving();
//        $(window).resize(headerMoving);
//     });
$(document).ready(function() {
    const headerMoving = () => {
      // Cache DOM elements for better performance
      const $header = $('header');
      const $headerContainer = $('.header-container');
      const $mainHeader = $('.header-back');
      const $downHeader = $('.header-down');
      const $advertise = $('.advertise');
      const $resSearch = $('.res-search');
      
      // Get element heights
      const resSearchHeight = $resSearch.outerHeight() || 0;
      const downHeaderHeight = $downHeader.outerHeight() || 0;
      const mainHeaderHeight = $mainHeader.outerHeight() || 0;
      const adHeaderHeight = $advertise.outerHeight() || 0;
  
      // Variables for scroll tracking
      let lastScrollTop = 0;
      let isHeaderVisible = true;
      
      // Reset any existing classes first
      $mainHeader.removeClass('lg-header-up');
      $downHeader.removeClass('header-hidden');
      $resSearch.removeClass('header-hidden');
      
      // Setup for desktop (> 992px)
      if (window.innerWidth > 992) {
        console.log("Desktop mode activated");
        // Calculate heights
        const headerHeight = mainHeaderHeight + downHeaderHeight;
        const totalHeight = headerHeight + adHeaderHeight;
        
        // Set initial heights
        $headerContainer.css('height', headerHeight);
        $('body').css('padding-top', totalHeight);
        
        // Scroll handler for desktop
        $(window).off('scroll.headerDesktop').on('scroll.headerDesktop', function() {
          const currentScroll = $(this).scrollTop();
          
          // Only trigger changes after scrolling down a bit
          if (currentScroll > 50) {
            // Scrolling down - hide header-down
            if (currentScroll > lastScrollTop && isHeaderVisible) {
              $mainHeader.addClass('lg-header-up');
              $downHeader.addClass('header-hidden');
              $headerContainer.css('height', mainHeaderHeight);
              isHeaderVisible = false;
              console.log("Desktop: Hiding header-down");
            } 
            // Scrolling up - show header-down
            else if (currentScroll < lastScrollTop && !isHeaderVisible) {
              $mainHeader.removeClass('lg-header-up');
              $downHeader.removeClass('header-hidden');
              $headerContainer.css('height', headerHeight);
              isHeaderVisible = true;
              console.log("Desktop: Showing header-down");
            }
          } else {
            // At the top of the page, show everything
            $mainHeader.removeClass('lg-header-up');
            $downHeader.removeClass('header-hidden');
            $headerContainer.css('height', headerHeight);
            isHeaderVisible = true;
          }
          
          lastScrollTop = currentScroll;
        });
      } 
      // Setup for mobile (≤ 992px)
      else {
        console.log("Mobile mode activated");
        // Calculate heights for mobile
        const headerHeight = mainHeaderHeight + resSearchHeight;
        const totalHeight = headerHeight + adHeaderHeight;
        
        // Set initial heights
        $headerContainer.css('height', headerHeight);
        $('body').css('padding-top', totalHeight);
        
        // Scroll handler for mobile
        $(window).off('scroll.headerMobile').on('scroll.headerMobile', function() {
          const currentScroll = $(this).scrollTop();
          
          if (currentScroll > 50) {
            // Scrolling down - hide res-search
            if (currentScroll > lastScrollTop && isHeaderVisible) {
              $mainHeader.addClass('lg-header-up');
              $resSearch.addClass('header-hidden');
              $headerContainer.css('height', mainHeaderHeight);
              isHeaderVisible = false;
              console.log("Mobile: Hiding res-search");
            } 
            // Scrolling up - show res-search
            else if (currentScroll < lastScrollTop && !isHeaderVisible) {
              $mainHeader.removeClass('lg-header-up');
              $resSearch.removeClass('header-hidden');
              $headerContainer.css('height', headerHeight);
              isHeaderVisible = true;
              console.log("Mobile: Showing res-search");
            }
          } else {
            // At the top of the page, show everything
            $mainHeader.removeClass('lg-header-up');
            $resSearch.removeClass('header-hidden');
            $headerContainer.css('height', headerHeight);
            isHeaderVisible = true;
          }
          
          lastScrollTop = currentScroll;
        });
      }
    };
  
    // Initialize on document ready
    headerMoving();
    
    // Reinitialize on window resize with debounce
    let resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        console.log("Window resized - reinitializing header behavior");
        headerMoving();
      }, 250);
    });
  });



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
               
            }
})
$('.chat-box i').on('click', function(){
    hideChat= false;


})
$('body').on('click',function(e){
    if(!e.target.closest('.fix-chat')&&!e.target.closest('.chat-box')){
        hideChat= false;

    }
  })
})

  //hero-swiper
var swiper = new Swiper('#my-swiper', {
    loop: true,
    loopedSlides: 5,
    speed: 3000,
    autoplay: {
        delay: 1000,
        reverseDirection:true,
        // stopOnLastSlide:true
    },
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
                      items: 3
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
                    items:1.2
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
    loopedSlides: 3,
    speed: 3000,
    autoplay: {
        delay: 1000,
        reverseDirection:true,
        // stopOnLastSlide:true
    },
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
    loopedSlides: 3,
    speed: 3000,
    autoplay: {
        delay: 1000,
        reverseDirection:true,
        // stopOnLastSlide:true
    },
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

//footer

var tabs=$('.footer-tab');
    tabs.on('click', function(){
        // $(this).addClass('active');
        $('#'+$(this).data('tab')).toggleClass('active')
    })


    //baner
    $('.baner').on('mouseenter', function(){
        $(this).addClass('hover-horizontal');
        $(this).removeClass('hover-horizontal-back');
        $(this).addClass('vertical-hover');
        $(this).removeClass('vertical-hover-back');
    
    
    })
    $('.baner').on('mouseleave', function(){
        $(this).removeClass('hover-horizontal');
        $(this).addClass('hover-horizontal-back');
        $(this).removeClass('vertical-hover');
        $(this).addClass('vertical-hover-back');
    
    })
    
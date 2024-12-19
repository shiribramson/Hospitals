// Owl Carousel : Owl Carousel Emergency

$(document).ready(function () {
    
    var dirAttribute = $('html').attr('dir'); 
    var rtl = false; 
    if (dirAttribute === 'rtl') {rtl = true; }
    
    var owlEmergency = $('.owl-carousel-emergency').owlCarousel({
    rtl:rtl,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText : ["<img src='./icons/ChevronArrowL.svg'/>","<img src='./icons/ChevronArrowL.svg'/>"],
    responsive:{
      0:{
          items: 1,
          stagePadding: 0,
           // Display items per view on mobile
      },
      600:{
          items: 1,
          stagePadding: 0,
          // Display items per view on tablet
      },
      1000:{
          items: 1, 
          stagePadding: 0,
          // Display items per view on desktop
      }
    },
 
    });
 
   });
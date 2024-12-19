// Owl Carousel : Owl Carousel Lobby News
$(document).ready(function () {

    var dirAttribute = $('html').attr('dir'); 
    var rtl = false; 
    if (dirAttribute === 'rtl') {rtl = true; }
    
    
    $('.owl-carousel-lobby-news').owlCarousel({
      rtl:rtl,
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      navText : ["<img src='./icons/ChevronArrowL.svg'/>","<img src='./icons/ChevronArrowL.svg'/>"],
    responsive:{
          0:{
              items: 1,
              stagePadding: 50,
              margin: 20,
               // Display items per view on mobile
          },
          600:{
              items: 1,
              stagePadding: 50,
              margin: 20,
              // Display items per view on tablet
          },
          1000:{
              items: 3, 
              stagePadding: 0,
              margin: 20,
              // Display items per view on desktop
          }
      }
    });
  
    });
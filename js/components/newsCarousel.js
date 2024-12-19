// Owl Carousel : Owl Carousel News
$(document).ready(function () {

    var dirAttribute = $('html').attr('dir'); 
    var rtl = false; 
    if (dirAttribute === 'rtl') {rtl = true; }
    
    
    var newsOwl =$('.owl-carousel-news').owlCarousel({
      rtl:rtl,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 3000,
      navText : ["<img src='./icons/ChevronArrowL.svg'/>","<img src='./icons/ChevronArrowL.svg'/>"],
    responsive:{
          0:{
              items: 1,
              stagePadding: 0,
              loop: false,
               // Display items per view on mobile
          },
          600:{
              items: 1,
              stagePadding: 0,
              loop: false,
              // Display items per view on tablet
          },
          1000:{
              items: 3, 
              stagePadding: 0,
              loop: true,
              // Display items per view on desktop
          }
      }
    });

    var dotElements = newsOwl.find('.owl-dot');
    var dotCount = dotElements.length;
 
    if(window.innerWidth <= 600) {  
        if(dotCount <= 1) {    
            var disabledButtonPrev = $('.owl-carousel-news .owl-prev');
            var disabledButtonNext = $('.owl-carousel-news .owl-next');

            $(disabledButtonPrev).css('opacity', '0.5');
            $(disabledButtonNext).css('opacity', '0.5');
        } 
    }  
});
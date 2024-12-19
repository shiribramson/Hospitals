// Owl Carousel : Owl Carousel Emergency Hero 
 
$(document).ready(function () {  

    var dirAttribute = $('html').attr('dir');
    var rtl = false;
    if (dirAttribute === 'rtl') {
      rtl = true;
    }
    
    var emergencyOwl = $('.owl-carousel-emergency-hero').owlCarousel({
      rtl: rtl,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      dotsEach: true,
      autoplay: false,
      autoplayTimeout: 3000,
      navText: ["<img src='./icons/ChevronArrowLeftWhite.svg'/>", "<img src='./icons/ChevronArrowLeftWhite.svg'/>"],
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          // Display items per view on mobile
        },
        600: {
          items: 1,
          stagePadding: 0,
          // Display items per view on tablet
        },
        1000: {
          items: 1,
          stagePadding: 0,
          // Display items per view on desktop
        }
      },
    });
  
  
    const baseGap = 19; // Starting gap value
    
    var emergencyDotElements = emergencyOwl.find('.owl-dot');
    var emergencyDotCount = emergencyDotElements.length;
    
    const emergencyGapValue = baseGap + emergencyDotCount * 19 + 'px';
    
    $('html').css('--emergency-gap', emergencyGapValue);
    
    });
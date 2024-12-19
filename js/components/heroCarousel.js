// Owl Carousel : Owl Carousel Hero

$(document).ready(function () {

    var dirAttribute = $('html').attr('dir');
    var rtl = false;
    if (dirAttribute === 'rtl') {
      rtl = true;
    }
    
    var heroOwl = $('.owl-carousel-hero').owlCarousel({
      rtl: rtl,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      dotsEach: true,
      autoplay: false,
      autoplayTimeout: 3000,
      navText: ["<img src='./icons/ChevronArrowL.svg'/>", "<img src='./icons/ChevronArrowL.svg'/>"],
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
    
    var dotElements = heroOwl.find('.owl-dot');
    var dotCount = dotElements.length;
    
    const baseGap = 19; // Starting gap value
    const gapValue = baseGap + dotCount * 19 + 'px';
    
    $('html').css('--gap', gapValue);

});

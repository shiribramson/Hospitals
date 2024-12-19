// Owl Carousel : Owl Carousel Video
$(document).ready(function () {

    var $owl = $('.owl-carousel-video');
    $owl.on('initialized.owl.carousel', function(event){ 
        $('.videoLink').click(function (event) {
            player.loadVideoById($(this).attr('yid'));
            event.preventDefault();
        })
    
    });
  
    var dirAttribute = $('html').attr('dir'); 
    var rtl = false; 
    if (dirAttribute === 'rtl') {rtl = true; }
    
    
    $('.owl-carousel-video').owlCarousel({
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
                      stagePadding: 0,
                       // Display items per view on mobile
              },
              600:{
                      items: 1,
                      stagePadding: 0,
                      // Display items per view on tablet
              },
              1000:{
                      items: 3, 
                      stagePadding: 5,
                      // Display items per view on desktop
              }
      }
  });
  
  
  
  $('.owl-carousel-lobby-video').owlCarousel({
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
                stagePadding: 0,
                 // Display items per view on mobile
        },
        600:{
                items: 1,
                stagePadding: 0,
                // Display items per view on tablet
        },
        1000:{
                items: 3, 
                stagePadding: 0,
                // Display items per view on desktop
        }
  }
  });
  
  });
   
// // Sticky Navbar WORKING FOR ALISHEVA AND EITAN
// $(document).ready(function () {
 
//   //var isMobile =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !0 : !1
//   //sticky nav for mobile
//   if (IsMobile) {
//       var stickyNavbarMobile = $('#navbar-mobile').offset().top;
//       $('#s4-workspace').scroll(function () {
//           myFunction(stickyNavbarMobile, '#navbar-mobile');
//       });
//   }
//   else {
//       var stickyNavbarDesktop = $('#navbar-desktop').offset().top;
//       $('#s4-workspace').scroll(function () {
//           myFunction(stickyNavbarDesktop, '#navbar-desktop');
//       });
//   }
//   function myFunction(stickyPosition, navbarSelector) {
//       if ($('#s4-workspace').scrollTop() >= stickyPosition) {
//           $(navbarSelector).addClass("sticky");
//       } else {
//           $(navbarSelector).removeClass("sticky");
//       }
//   }

// });


$(document).ready(function() {
    var stickyNavbarDesktop = $('#navbar-desktop').offset().top;
    
    $(window).scroll(function() {
    myFunction(stickyNavbarDesktop, '#navbar-desktop');
    });
    
    function myFunction(stickyPosition, navbarSelector) {
    if ($(window).scrollTop() >= stickyPosition) {
      $(navbarSelector).addClass("sticky");
    } else {
      $(navbarSelector).removeClass("sticky");
    }
    }
    });
    
    
    
    $(document).ready(function() {
    var stickyNavbarMobile = $('#navbar-mobile').offset().top;
    
    $(window).scroll(function() {
    myFunction(stickyNavbarMobile, '#navbar-mobile');
    });
    
    function myFunction(stickyPosition, navbarSelector) {
    if ($(window).scrollTop() >= stickyPosition) {
      $(navbarSelector).addClass("sticky");
    } else {
      $(navbarSelector).removeClass("sticky");
    }
    }
    });
// Navbar Desktop 

$(document).ready(function() {
    // Dropdown menu
    $(".navbar-desktop ul li.navbar-li").hover(function() {
    var clickedDropdown = $(this).find(".dropdown");
    
    if (!clickedDropdown.hasClass("collapsed")) {
      $(".navbar-desktop ul li.navbar-li ul.dropdown").removeClass("collapsed");
    }
    
    clickedDropdown.toggleClass("collapsed");
    }, function() {
    var clickedDropdown = $(this).find(".dropdown");
    clickedDropdown.toggleClass("collapsed");
    });
    
    
    // Active nav
    $(".navbar-li a.main-sub-catrogry-title").hover(function() {
    $(this).addClass("active-nav"); 
    var hoveredLink = $(this);
    var clickedDropdown = hoveredLink.closest(".navbar-li").find(".dropdown");
    if (!clickedDropdown.hasClass("collapsed")) {
      // Keep the active class when mouse leaves the link but is still inside the dropdown
      clickedDropdown.hover(function() {
        hoveredLink.addClass("active-nav");
      }, function() {
        hoveredLink.removeClass("active-nav");
      });
    }
    }, function() {
    $(this).removeClass("active-nav");
    });
    });

    // Navbar Desktop 
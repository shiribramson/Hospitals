
// Navbar Mobile 

// Dropdown menu
$(document).ready(function() {
    $(".navbar-li-wrapper .main-arrow-wrapper").on("click", function() { 
      var objectLi = $(this).closest("li.navbar-li");
      var clickedDropdown = $(objectLi).find(".dropdown");
      var arrowUpDown = $(this).find(".arrow");
  
      if(!clickedDropdown.hasClass("collapsed")) {
        $(".navbar-mobile ul li ul.dropdown").removeClass("collapsed");  
        $(".navbar-mobile ul li .arrow").removeClass("arrow-up-down");   
      }
  
      clickedDropdown.toggleClass("collapsed");
      arrowUpDown.toggleClass("arrow-up-down");
  
    });
    });
  
  
    
  // Dropdown menu - Sub Category
  $(document).ready(function() {
    $(".navbar-li-sub-wrapper .arrow-wrapper").on("click", function() { 
      var objectLi = $(this).closest("li.sub-category-title");
      var clickedDropdownSubCat = $(objectLi).find(".dropdown-sub-category");
      var arrowUpDownSubCat = $(this).find(".arrow-sub");
  
      var objectElement = $(this).closest("li.sub-category-title");
      var addClassObjectElement = $(objectElement).find(".toggle-border-bottom");
  
    
      if(!clickedDropdownSubCat.hasClass("collapsed")) {
        $(".navbar-mobile ul li ul.dropdown-sub-category").removeClass("collapsed");  
        $(".navbar-mobile ul li .arrow-sub").removeClass("arrow-sub-up-down");   
      }
  
      if(!addClassObjectElement.hasClass("border-none")) {
        $(".toggle-border-bottom").removeClass("border-none");  
      } 
  
      addClassObjectElement.toggleClass("border-none");
      clickedDropdownSubCat.toggleClass("collapsed");
      arrowUpDownSubCat.toggleClass("arrow-sub-up-down");
  
    });
    });


    
     // Open Close mobile menu
     $(document).ready(function() {
        $(".icon-open-menu , .icon-close-menu").click(function() { 
          var iconMenuOpenClose = $(".icon-open-menu");
          var navbar = $(".navbar-mobile");
          var overlay = $("#overlay");
    
          navbar
            .toggleClass("open-close-mobile-nav")
            .find(iconMenuOpenClose)
            .toggleClass("none-block");
          
          overlay.toggleClass("block-none");
    
          // Close Mobile menu with click on overlay
          overlay.one("click", function() {
          navbar.toggleClass("open-close-mobile-nav");
          overlay.removeClass("block-none"); 
        });
    
        });
        
      });
  
  // Navbar Mobile
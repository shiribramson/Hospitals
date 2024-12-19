// Lang Dropdown

$(document).ready(function() {
    // Lang dropdown menu
    $("ul.lang-dropdown-menu li").on("click", function() {
      var clickedDropdown = $(this).find(".dropdown");
      var arrowUpDown = $(this).find(".arrow");
  
      if (!clickedDropdown.hasClass("collapsed")) {
        $("ul.lang-dropdown-menu li ul.dropdown").removeClass("collapsed");
        $("ul.lang-dropdown-menu li .arrow").removeClass("arrow-up-down");
      }
  
      clickedDropdown.toggleClass("collapsed");
      arrowUpDown.toggleClass("arrow-up-down");
    });
  });

 // Lang Dropdown
  
  
  
  $(document).ready(function() {
  // Lang checked status
  $("a.lang-li-a").on("click", function() {
  var currentLi = $(this).closest("li.lang-li");
  var otherLi = $("li.lang-li").not(currentLi);
  
  currentLi.addClass("block-icon");
  otherLi.removeClass("block-icon");
  });
  });
// Sharpoint Script 

function DisplayKeySearch() {
  var isCtrl = false;
  
  jQuery(document).keyup(function (e) {
    if (e.which == 17) isCtrl = false;
  }).keydown(function (e) {
    if (e.which == 17) isCtrl = true;
    if (e.which == 77 && isCtrl == true) {
        if (jQuery('#signIn').css("display") === "none")
            jQuery('#signIn').css("display", "block");
        else
            jQuery('#signIn').css("display", "none");
  
        return false;
    }
  });
  }
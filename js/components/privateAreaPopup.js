// Private Area Popup

  $(document).ready(function() {
    // Open private area popup with click to online btn
    $(document).on("click", ".to-online-btn", function() {
      var privateAreaPopup = $(".private-area-popup");
      var overlay = $("#overlay");
  
      privateAreaPopup.toggleClass("block-none");
      overlay.addClass("block-none"); // Add the "block-none" class to overlay
  
      // Close private area popup with click on overlay
      overlay.one("click", function() {
        privateAreaPopup.toggleClass("block-none");
        overlay.removeClass("block-none"); // Remove the "block-none" class from overlay
      });
    });
  });

  // Private Area Popup
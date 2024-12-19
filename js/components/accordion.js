// Accordion 

$(document).ready(function() {
    var activeAccordion = null;
  
    $(".faq-question").click(function(e) {
      
      e.preventDefault();
      if (activeAccordion !== this) {
    
        if (activeAccordion) {
          $(activeAccordion).removeClass("active-indicator");
          var activePanel = $(activeAccordion).next();
          activePanel.css("max-height", "");
        }
  
        $(this).addClass("active-indicator");
        var answer = $(this).next();
        answer.css("max-height", answer.prop("scrollHeight") + "px");
        activeAccordion = this;
      } else {
        $(this).removeClass("active-indicator");
        var answer = $(this).next();
        answer.css("max-height", "");
        activeAccordion = null;
      }
    });
  });
  
  // Accordion 
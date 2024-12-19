// Tabs


$(document).ready(function() {
    $(".tabs").each(function() {
        var $tabWrapper = $(this);

        $tabWrapper.find(".tab-header li").on("click", function() {
            var tabId = $(this).index();
            $tabWrapper.find(".tab").removeClass("active");
            $tabWrapper.find(".tab-header li").removeClass("active");

            $(this).addClass("active");
            $tabWrapper.find(".tab").eq(tabId).addClass("active");
        });
    });
});


// Tabs
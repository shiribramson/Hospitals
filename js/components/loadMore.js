// Load More 

$(document).ready(function() {
    $(".load-more-item").slice(0, 0).toggleClass('show');
    if ($(".load-more-item:hidden").length != 0 ) {
        $("#load").toggleClass('show');
    }
    $("#load").on("click", function(e) {
        e.preventDefault();
        $(".load-more-item:hidden").slice(0, 6).toggleClass('show');;
        if ($(".load-more-item:hidden").length == 0) {
            $("#load").text("אין עוד תוצאות").fadOut("");
        }
    });
}) 

// Load More


// Load More Tags Items

$(document).ready(function() {
    $(".load-more-tag-item").slice(0, 0).toggleClass('show');
    if ($(".load-more-tag-item:hidden").length != 0 ) {
        $("#load-item").toggleClass('show');
    }
    $("#load-item").on("click", function(e) {
        e.preventDefault();
        $(".load-more-tag-item:hidden").slice(0, 6).toggleClass('show');;
        if ($(".load-more-tag-item:hidden").length == 0) {
            $(".load-item-wrapper").addClass('no-more-results');
            $("#load-item").text("אין עוד תוצאות").fadOut("");
        }
    });
}) 

// Load More Tags Items

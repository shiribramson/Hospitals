// Autocomplete

$(document).ready(function () {
  var currentFocus;

  $(".autocomplete-input").on("input", function (e) {
    var a, b, i, val = this.value;
    $(".autocomplete-items").remove();

    if (!val) {
      return false;
    }
    currentFocus = -1;

    a = $("<div></div>");
    a.attr("id", "autocomplete-list");
    a.addClass("autocomplete-items");

    $(this).parent().append(a);

    for (i = 0; i < data.length; i++) {
      if (data[i].slice(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = $("<div></div>");
        b.addClass("autocomplete-item");

        b.html("<strong>" + data[i].slice(0, val.length) + "</strong>");
        b.html(b.html() + data[i].slice(val.length));
        b.html(b.html() + "<input type='hidden' value='" + data[i] + "'>");

        b.on("click", function (e) {
          $(".autocomplete-input").val($(this).find("input").val());
          $(".autocomplete-items").remove();
        });

        a.append(b);
      }
    }
  });

  $(".autocomplete-input").on("keydown", function (e) {
    var x = $("#autocomplete-list .autocomplete-item");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) {
      return false;
    }
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = x.length - 1;
    }
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  $(document).on("click", function (e) {
    closeAllLists(e.target);
  });

  function closeAllLists(elmnt) {
    $(".autocomplete-items").each(function () {
      if (elmnt !== this && elmnt !== $(".autocomplete-input")) {
        $(this).remove();
      }
    });
  }

  var data = ["סדנת הכנה ללידה", "כירורגיה", "מרכז רפואי שניידר",  "מרכז רפואי ליולדות", "מרכז בתי חולים", "מרכז רפואי מאיר", "מרכז רפואי בלינסון","בתי חולים","אף אוזן גרון","רופא אוזניים","רופא עיניים","רופא משפחה","מרכז שירות לקוחות", "מרחב מוגן",
  "אורוטופדיה", "התורים שלי", "תוצאות בדיקות", "בקשות והודעות מהרופאים", "סיכומי ביקור", "תרופות ומרשמים", "החזרים אישורים והתחייבויות", "חיסונים",
];
});

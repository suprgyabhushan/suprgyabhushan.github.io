$(document).ready( function() {
  $(".toggle-nav").click( function() {
    var navigation = $("nav");

    if (navigation.hasClass("visible")) {
      navigation.removeClass("visible").addClass("hidden");
    } else {
      navigation.removeClass("hidden").addClass("visible");
    }

  });
});

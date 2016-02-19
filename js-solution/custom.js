$(document).ready(function() {
  if ($(window).width() > 950) {
    $('.row-eq-height').each(function() {
      var eHeight = $(this).innerHeight();
      $(this).find('.col-eq-height').outerHeight(eHeight);
    });
  }
});

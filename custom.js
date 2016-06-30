$(document).ready(function() {
  if ($(window).width() > 950) {
    $('.row-eq-height-js').each(function() {
      var eHeight = $(this).innerHeight();
      $(this).find('.col-eq-height-js').outerHeight(eHeight);
    });
  }
});

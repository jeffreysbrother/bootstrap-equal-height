

  $(document).ready(function() {
    if ($(window).width() > 950) {

  // SOLUTION #1
    // $(".row-eq-height").each(function() {
    //     var heights = $(this).find(".col-eq-height").map(function() {
    //         return $(this).outerHeight();
    //     }).get(), maxHeight = Math.max.apply(null, heights);
    //
    //     $(this).find(".col-eq-height").outerHeight(maxHeight);
    // });





  // //SOLUTION #2
  if (screen.width > 992) {
    $('.row-eq-height').each(function() {
      var eHeight = $(this).innerHeight();

      $(this).find('.col-eq-height').outerHeight(eHeight);
    });
  }

}
});

jQuery(function ($) {
  //declare slider (owl-carousel slider)
  $('.partnersSlider').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    dots: false,
    navText: ["<i class='lni lni-arrow-left'></i>", "<i class='lni lni-arrow-right'></i>"],

    responsive: {
      0: {
        items: 2,

      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,

      }


    }
  });

});


/**
 * @file
 * Drupal 8 premier league theme custom js.
 */

(function ($) {
  'use strict';
  // Text Fly functionality.
  $(window).scroll(function () 
    var scrolVal = $(document).scrollTop().valueOf();
    var scrollSpkPosition = $('#bannertext').position().top;
    var compare_val = 500;
    var adnl_minus_val = 0;
    if (((scrolVal - scrollSpkPosition) < compare_val)) {
      $('#bannertext').find('.tween_item').css('margin-left', (scrolVal - scrollSpkPosition) - adnl_minus_val);
    }
  });
})(jQuery);

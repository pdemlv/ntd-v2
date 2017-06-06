(function($) {
  $.fn.heightPlug = function() {
    this.each(function() {
      var heightPar = $(this).outerHeight();
      var childEl = $(this).find('.childHeight');
      childEl.css('height', heightPar);
    });
  };
})(jQuery);

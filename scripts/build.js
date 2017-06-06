(function($) {
  $.fn.build = function() {
    this.click(function(e){
      e.preventDefault();
    });
    this.hover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      var act = $(this).attr("act");
      var pos = $(this).position();
      $('.cottegeInfoText').each(function() {
        if(act == $(this).attr("act")){
          pos.top -= ($(this).height() + 5);
          pos.left -= ($(this).width() + 5);
          $(this).css('top', pos.top);
          $(this).css('left', pos.left);
          $(this).fadeIn();
        }
      });
    }, function(){
      $('.cAll').removeClass('active');
      $('.cottegeInfoText').fadeOut();
    });
  };
})(jQuery);

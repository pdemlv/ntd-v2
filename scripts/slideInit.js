jQuery(document).ready(function($) {

  var _SlideshowTransitions = [
    //Fade
    {
      $Duration: 1200,
      $Opacity: 2
    }
  ];

  var options = {
    $AutoPlay: false,
    $ArrowKeyNavigation: true,
    $SlideDuration: 500,
    $MinDragOffsetToSlide: 20,
    $SlideWidth: 1200,
    $SlideHeight: 800,
    $SlideSpacing: 0,
    $DisplayPieces: 1,
    $ParkingPosition: 0,
    $UISearchMode: 1,
    //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
      $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
      $Transitions: _SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
      $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
      $ShowLink: false //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
    },

    $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
      $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 1, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
      $Lanes: 1, //[Optional] Specify lanes to arrange items, default value is 1
      $SpacingX: 10, //[Optional] Horizontal space between each item in pixel, default value is 0
      $SpacingY: 10, //[Optional] Vertical space between each item in pixel, default value is 0
      $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
    },

    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
    }
  };

  var options2 = {
    $AutoPlay: false,
    $AutoPlaySteps: 1,
    $AutoPlayInterval: 3000,
    $PauseOnHover: 3,
    $ArrowKeyNavigation: true,
    $SlideDuration: 500,
    $MinDragOffsetToSlide: 20,
    $SlideWidth: 1200,
    $SlideHeight: 700,
    $SlideSpacing: 0,
    $DisplayPieces: 1,
    $ParkingPosition: 0,
    $UISearchMode: 1,
    //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
      $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
      $Transitions: _SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
      $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
      $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
    },

    $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
      $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 1, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
      $Lanes: 1, //[Optional] Specify lanes to arrange items, default value is 1
      $SpacingX: 10, //[Optional] Horizontal space between each item in pixel, default value is 0
      $SpacingY: 10, //[Optional] Vertical space between each item in pixel, default value is 0
      $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
    },

    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
    }
  };
  var jssor_slider1 = new $JssorSlider$("slider1_container", options);
  var jssor_slider2 = new $JssorSlider$("slider2_container", options2);
  var jssor_slider3 = new $JssorSlider$("slider3_container", options2);

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales while window resizes
  function ScaleSlider() {
      var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
      if (parentWidth){
        jssor_slider2.$ScaleWidth(Math.min(parentWidth, 960));
        jssor_slider3.$ScaleWidth(Math.min(parentWidth, 960));
        }
      else
          window.setTimeout(ScaleSlider, 30);
  }
  ScaleSlider();
  
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});

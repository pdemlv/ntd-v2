$(document).ready(function() {
  $('.parentHeight').heightPlug();
  $('.cAll').build();

  var windoW = $(window).width();

  $("a.fancybox").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });

  function closeMenu(animH){
    $('.menuBox').animate({
      'max-height': animH
    }, 700);
  }

  $('.menuOpen').click(function(e) {
    e.preventDefault();
    $('.menuBox').toggleClass('animatedMenu');
    var animH = ($('.menuBox').hasClass('animatedMenu')) ? '1000px' : '0';
    closeMenu(animH);
  });

  if (windoW <= 700) {
    $('.menu li').click(function(){
      closeMenu(0);
    })
  }

  $(window).scroll(function() {
    var scrolTop = $(window).scrollTop();
    if (scrolTop > 0) {
      $('header').addClass('minMenu');
    } else{
      $('header').removeClass('minMenu');
    }
  });

  var windowH = $(window).height();
  $('.screenHeigh').css('height', windowH);

  var hProject = $('.aboutProjectInsider').outerHeight();
  var wProject = $('.aboutProjectInsider').outerWidth();
  $('.greenShadow').css('height', hProject)
    .css('width', wProject);

  var hContact = $('.formCont').outerHeight();
  var wContact = $('.formCont').outerWidth();
  $('.contBg').css('height', hContact)
    .css('width', wContact);
    
    $(".sendmail").submit(function (e) {
        e.preventDefault();
        var useed_form = $(this);        
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST", 
            url: "mail.php", 
            data: form_data,
            success: function () {                
                $.fancybox({
                    href: '#popup-success',                  
                    modal: true
                });
               $('.sendmail input:not([name="subject"],[type="submit"]),.sendmail textarea').val('');
            }
        });
        
    });
    $('#popup-success .fancybox-close').on('click',function(event) {
        event.preventDefault();
        $.fancybox.close(true);
    });
});

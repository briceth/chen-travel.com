
$(document).ready(function(){

// hide our element on page load
  $('.icones').css('opacity', '0');

  $('.icones').waypoint(function() {
    $('.icones').addClass('bounceInLeft');
    $('.icones').css('opacity', '1');
    $('.edition').css('opacity', '0');
    $('.edition').delay(600).queue(function () {
        $(this).addClass('bounceInRight');
        $(this).css('opacity', '1');
    });
  }, { offset: '70%' });

});

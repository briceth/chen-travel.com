
$(document).ready(function(){

// hide our element on page load
// $('.icones').css('opacity', '0');

  $('.icones').waypoint(function() {
    $('.icones').addClass('bounceInLeft');
    $('.edition').css('opacity', '0');
    $('.edition').delay(600).queue(function () {
        $('.edition').addClass('bounceInRight');
        $('.edition').css('opacity', '1');
    });
  }, { offset: '100%' });

});

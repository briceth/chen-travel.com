$(document).ready(function (){

  $('.ptn').css('opacity', '0');

  $('.partner').waypoint(function() {
    $('.partners-title').addClass('fadeInUp');
    $('.partners-title').css('opacity', '1');
      $('.partner-picture').delay(600).queue(function () {
        $(this).addClass('fadeInUp');
        $(this).css('opacity', '1');
  }, { offset: '100%' });

  });
});

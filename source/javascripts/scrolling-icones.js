
$(document).ready(function(){

// hide our element on page load
// $('.icones').css('opacity', '0');

$('.icones').waypoint(function() {
  $('.icones').addClass('bounceInLeft');
}, { offset: '100%' });

});

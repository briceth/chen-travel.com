$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Scene 1 - pin the second section
  var pinScene01 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide01 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 2 - pin the third section
  var pinScene02 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide02 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 3 - pin the fourth section
  var pinScene03 = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide03 .pin-wrapper')
  .addTo(controller)
  ;

  // Scene 4 - pin the fifth section
  var pinScene04 = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide04 .pin-wrapper')
  .addTo(controller)
  ;

});


 // triggerhook: 0 => start at the top of the viewport
 // triggerhook: 0.5 => start at the  middle of the viewport
 // triggerhook: 1 => start at the bottom of the viewport

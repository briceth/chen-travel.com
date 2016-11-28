$(document).ready(function () {

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Scene 1 - pin the second section
  var pinScene01 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerhook: 0,
    duration: '100%'

  })
  .setPin('#slide01 .pin-wrapper')
  .addTo(controller);
});


 // triggerhook: 0 => top of the viewport
 // triggerhook: 0.5 => middle of the viewport
 // triggerhook: 1 => bottom of the viewport

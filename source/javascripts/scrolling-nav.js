//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("#nav ul li a[href^='#']").click(function(event) {
        event.preventDefault();

        var linkHref = $(this).attr('href');

        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
    });
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/////////////////////////////////////////////////////////
// $("#nav ul li a[href^='#']").on('click', function(e) {

//    // prevent default anchor click behavior
//    e.preventDefault();

//    // store hash
//    var hash = this.hash;

//    // animate
//    $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      },  function(){

//        // when done, add hash to url
//        // (default click behaviour)
//        window.location.hash = hash;
//      });

// });

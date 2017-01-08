//jQuery for page scrolling feature - requires jQuery Easing plugin

$(document).ready(function($) {
    $('.scroll').bind('click.scroll', function(e) {
        e.preventDefault();

        // Get the current target hash
        var target = this.hash;
        console.log(target);

        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
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

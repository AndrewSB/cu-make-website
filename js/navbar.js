$(document).ready(function() {
   $('.top-bar a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 70;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false; 
    });


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        var navFix = $('.about').position().top - 70;
        if (windscroll >= navFix) {
            $('.top-bar').addClass('fixed');
            $('.wrapper > section').each(function(i) {
                if ($(this).position().top <= windscroll - 70) {
                    $('.top-bar a.active').removeClass('active');
                    $('.top-bar a').eq(i).addClass('active');
                } 
            });

        } else {
            $('.top-bar').removeClass('fixed');
            $('.top-bar a.active').removeClass('active');
        }

    }).scroll();
});
$(document).ready(function() {

    $(function(){
        var shrinkHeader = $('.js-header').outerHeight();

        if (window.matchMedia('(min-width: 800px)').matches) {

            $(window).scroll(function () {
                var scroll = getCurrentScroll();
                if (scroll >= shrinkHeader) {
                    $('.js-header').addClass('is-fixed');
                    console.log('middle');
                }
                else {
                    $('.js-header').removeClass('is-fixed');
                }
            });

            function getCurrentScroll() {
                return window.pageYOffset || document.documentElement.scrollTop;
            } 
        }
    });
});
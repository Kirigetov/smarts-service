$(document).ready(function() {

    $(function(){
        console.log('start');
        var shrinkHeader = $('.js-header').outerHeight();

        console.log(shrinkHeader);
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.js-header').addClass('is-fixed');
                console.log('middle');
            }
            else {
                $('.js-header').removeClass('is-fixed');
            }
        });

        console.log('end');
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

});
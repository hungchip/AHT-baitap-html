$(document).ready(function() {
    $(window).scroll(function() {
        var pos = $('html, body').scrollTop();
        if (pos >= 1000) {
            $('#header').css('background', '#d6ba8d');
            $('#header').css('padding', '15px');

        } else {
            $('#header').css('background', 'none');
            $('#header').css('padding', '30px 15px');
        }
    });
});
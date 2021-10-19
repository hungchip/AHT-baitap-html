$(document).ready(function() {
    $(window).scroll(function() {
        var pos = $('html, body').scrollTop();
        if (pos >= 100) {
            $('#header').css('background', '#d6ba8d');
            $('#header').css('padding', '15px');

        } else {
            $('#header').css('background', 'none');
            $('#header').css('padding', '30px 15px');
        }
    });
    // $('.menu-icon').click(function() {
    //     // alert('hẻllo');
    //     // $('.ul-menu ').css('width', '300px');
    //     // $('.ul-menu ').toggle(function() {
    //     //     $('.ul-menu').animate({ width: "300px" })
    //     // });

    // });
    $('.menu-icon').click(function() {
        var toggleWidth = $(".ul-menu").width() == 300 ? "0" : "300px";
        $('.ul-menu').animate({ width: toggleWidth });
    });
});
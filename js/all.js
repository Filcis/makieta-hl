$(document).ready(function(){
//    var a = $(window).height() - $('#menu').height();
    var a = $(window).height();
    $("#slider_wrapper").css('height', a);
    $(".wrapper-rezerwacje").height(function (index, height) {
    return (height + 140);
});

    $("#pogoda").hide();
    $(".pogoda_button").click(function(){
        $("#pogoda").toggle('highlight');
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $("#menu").addClass("scrolling");
    } else {
        $("#menu").removeClass("scrolling");
    }
});

$(function () {
    var image = $("#menu").find('img').attr('src');

    $("#menu ul li a").mouseover(function () {
        var currentImage = $(this).attr('imgid');

        $(this).parent().parent().parent().find('img').attr("src", currentImage);
    });
});
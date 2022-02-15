$('#portada').hover(function() {
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "90%",
        height: "90%"
    }, 'slow');

}, function() {
    $(this).animate({
        width: "100%",
        height: "100%"
    }, 'slow');

})
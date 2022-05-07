//any image which is a direct child of a column within gallery-section 
//will be wrapped with the lightbox wrapper
if ($('.gallery-section').length > 0) {
    $('.gallery-section .col-4 > img').hover(function () {
        $(this).css("cursor", "zoom-in");
    });
    $('.gallery-section .col-4 > img').each(function () {
        var element = $(this);
        var imageSrc = element.attr('src');
        element.wrap('<a href="' + imageSrc + '" data-fancybox="gallery" ></a>');

    });

}



//Get the image from each student and place it as a background image for the text on mobile
if ($('.piece_text').length > 0) {
    $('.piece_text').each(function () {
        var element = $(this);
        var imageSrc = element.prev().find('img').attr('src');
        element.prepend('<div class="mobile-bg-image" style="background-image: url(' + imageSrc + ');"></div>')
    });
}

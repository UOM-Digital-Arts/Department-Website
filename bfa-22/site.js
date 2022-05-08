//any image which is a direct child of a column within gallery-section 
//will be wrapped with the lightbox wrapper
if ($('.gallery-section').length > 0) {
    //This is to change the cursor upon hover
    $('.gallery-section .col-4 > img').hover(function () {
        $(this).css("cursor", "zoom-in");
    });

    //This is for the fancybox gallery view
    $('.gallery-section .col-4 > img').each(function () {
        var element = $(this);
        var imageSrc = element.attr('src');
        element.wrap('<a href="' + imageSrc + '" data-fancybox="gallery" ></a>');

    });

}
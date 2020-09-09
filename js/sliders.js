$('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight: true
    dots: false,
    prevArrow: false,
    nextArrow: false
})

$('#slider-category').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    //adaptiveHeight: true
    variableWidth: true,
    dots: false,
    prevArrow: false,
    nextArrow: false
})


$('#slider-popular').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight: true
    variableWidth: true,
    dots: false,
    prevArrow: false,
    nextArrow: false
})

$('#top-full-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false
})
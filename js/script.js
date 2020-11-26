import $ from 'jquery'
import 'slick-carousel'

$('#search-button').click(function(){
    search()
})

$('input[name="search"]').on('keypress',function(e) {
    if(e.which == 13) {
        search()
    }
});

let search = () => {
    let category = ['grocery', 'pharmacy']
    let input = $('input[name="search"]').val()
    if(category.includes(input)){
        alert(input)
    }
    else{
        alert(false)
    }
}

$('.category-item').click(function(){
    let category = $(this).find('.category-name').html().trim()
    alert(category)
})

$('#close-images-modal').click(function(){
    $('#images-modal').hide()
})

$('#close-request-modal').click(function(){
    $('#request-modal').hide()
})

$('.show-images-modal').click(function(){
    $('#images-modal').show()
})

$('.show-request-modal').click(function(){
    $('#request-modal').show()
})

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
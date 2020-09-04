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

function showMenu() {
    alert("show menu")
}

function getSearch(event){
    if(event == 'search' || event.keyCode == 13){
        let category = ['grocery', 'pharmacy']
        let input = $('input[name="search"]').val()
        if(category.includes(input)){
            alert(input)
        }
        else{
            alert(false)
        }
    }
}

function viewCategory(){
    alert("View Category")
}

$('.category-item').click(function(){
    let category = $(this).find('.category-name').html().trim()
    alert(category)
})

function onCall(){
    alert('call now')
}
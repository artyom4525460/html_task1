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

function onHideModal(selector){
    $(selector).hide();
}

function onShowModal(selector){
    $(selector).show();
}
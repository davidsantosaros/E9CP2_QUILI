$(document).ready(function () {
    $("#myform").on('submit',function (event) {
        var text= $("#mytext").val();
        event.preventDefault();
        $("#board").append(
            '<div class="note thumbnail">' 
        +'<div>  <button class="pin">X</button></div>'
            +text 
            +'</div>')
    });

$('#board').on('click','.pin', function(){
    $(this).closest(".note").remove()

//  $(this).parent().fadeOut(900);
})

$('#board').on('click','.note', function(){
    $(this).toggleClass('strike');

});

})
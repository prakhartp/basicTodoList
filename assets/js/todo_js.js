// Toggling the li's striked on clicking
$("ul").on("click" , "li" ,  function(){
    $(this).toggleClass("striked");
});

// Deleting the whole to-do on clicking delete
$("ul").on("click" , ".delete" , function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
    
});

// Creating of new to-do's
$("input").on("keypress" , function(event){
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class = \"delete\"><i class='fas fa-trash'></i></span> " + todo + " </li>");
    }
});
''
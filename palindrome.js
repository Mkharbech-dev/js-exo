$(document).ready( function() {
$('.bouton').click(function(){
    let texte = $('#pali').val()
    let message = $('.message')
    // console.log(texte)
    for (let i = 0; i< texte.length / 2 ; i++){
        if (texte[i] !== texte[texte.length - 1 - i]) {
            message.html("ce n'est pas  une palindrome")
            message.addClass( "alert alert-danger" );
            message.css( "padding", "10px")
        }else{
            message.html("c'est une palindrome" )
            message.addClass( "alert alert-success" );
            message.css( "padding", "10px")
        }
    }    
})
})
// *********************************************************
$(document).ready( function() {
    $('button').click(function(){
        let texte = $('#palindrome').val()
        let message = $('.resultat')
        // console.log(texte)
        for (let i = 0; i< texte.length / 2 ; i++){
            if (texte[i] !== texte[texte.length - 1 - i]) {
                message.html("ce n'est pas  une palindrome")
                message.addClass( "alert alert-danger" ); 
                message.css( "padding", "10px")
            }else{
                message.html("c'est une palindrome" )
                message.addClass( "alert alert-success" ); 
                message.css( "padding", "10px")
            }
        }    
    })
})
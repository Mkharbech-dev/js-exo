$(document).ready( function() {

// POUR R2CUPERER L4ID DE NOTRE DIV EN JQUERY
$('#afpa');
//jQuery('#afpa');
console.log($('#afpa'))
// AVEC CLASS
$('.moussa-afpa');
console.log($('.moussa-afpa'))

// $('p').click(function(){
//     alert('cliqué')
//     $(this).hide(2000)

// })

$('.paraph p').click(function(){
    $(this).css( "background", "#c8ebcc")
    .css( "border", "3px double red")
    // .text('salah ')
    .after('<span> hello </span>' + $(this).text())
})       
$('.paraph p').css('color', 'grey')

$('.paraph p').each(function(){
    $(this).css('border-raduis' , '10px')
    $(this).css( "background", "orange") 
})
// récuperer la "p" qui l'indice 1
console.log($('.paraph p').eq(1))
// $('p').css( "background", "#b4b0da" )
//   .filter(function( index ) {
//     return index === 1 
//   })
//     .css( "border", "3px double red" );







})

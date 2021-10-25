
 $(document).ready( function() {

   



    $('button').click(function(event){
        event.preventDefault()
        let taille = ($('#taille').val() * $('#taille').val())/10000
        console.log(taille)
        let poids =$('#poids').val()
        let result = $('.resultat')
        let mc = Math.round(poids/taille * 100)/ 100
        result.html(+ mc)
        if(mc > 18.5 && mc<24.9){
            $('.message').html(" votre corpulence est normale")
        }
    })
})
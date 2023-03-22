// jQuery
$(document).ready(function(){
    

    $("#botonabajonaranja").click(function(){
        
            $("#presentacion").slideUp(3000); //aparece
            $("#colperfil").slideDown(3000);     //desaparece
            $("#botonabajonaranja").hide();  //desaparece
            $("#flechaabajo").fadeOut();  //desaparece
            $("#flechaarriba").show();
            $("#botonarribanaranja").slideDown(1000); //aparece
            $("#nombre").hide(); //desaparece
            $("#nav").hide();    //desaparece
        })

        $("#botonarribanaranja").click(function(){
        
            $("#presentacion").slideDown(3000); //aparece
            $("#colperfil").slideUp(3000);   //desaparece 
            $("#flechaabajo").slideDown(1000); //aparece fadeIn
            $("#botonarribanaranja").hide();
            $("#flechaarriba").fadeOut();   //desaparece  fadeOut
            $("#botonabajonaranja").show(); //aparece  slideUp(1000)
            $("#nombre").show();  //aparece necesita delay
            $("#nav").show();    //aparece
        })

        
});
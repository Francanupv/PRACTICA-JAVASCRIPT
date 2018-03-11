let colores = ["blue","yellow","red", "grey", "green", "orange", "purple"]
let color = colores[Math.floor(Math.random() * colores.lenght)];


$(document).ready(function(){
    $("#anuncio")
    .text("CLICK AQUI")
   .fadeIN(3000)
    .css("width", 500)
    .css("height", 500)
  



});

$("#anuncio").on("click", function(){
    $("#anuncio").css(color)
})
$("div").ready(function(){
$("#mensaje_img1").hide();

})

$("img").hover(function(){
    $("#mensaje_img1").show();
})

$("img").on("mouseout", function(){
    $("#mensaje_img1").hide();
})
var colour = ["#F44925","#ECF425","#3EF425","#253FF4","#727272"];
var i = 0;
document.getElementById("colorBtn").addEventListener("click", function(){
    i = i<colour.length ? ++i : 0;
    document.querySelector("body").style.background = colour[i];
});
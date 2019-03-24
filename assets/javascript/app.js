

var eyeBalls = document.getElementsByClassName("eyeball")
document.onmousemove = function(){
var x = event.clientX * 100 / window.innerWidth +"%";
 var y = event.clientY * 100 / window.innerHeight +"%";
 
 for (var i = 0; i < 2; i++){
  eyeBalls[i].style.left = x;
  eyeBalls[i].style.top = y;
  eyeBalls[i].style.transform = "translate(-"+x+",-"+y+")";

}
};

// function on() {
//   document.getElementById("overlay-me").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay-me").style.display = "none";
// }

$("#overlay-me").click(function(){
  $("#overlay-me").fadeOut(500);
});

  $("#btnid").click(function(){
  $("#overlay-me").fadeIn(500);
});
 


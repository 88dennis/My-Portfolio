var eyeBalls = document.getElementsByClassName("eyeball")
document.onmousemove = function () {
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for (var i = 0; i < 2; i++) {
    eyeBalls[i].style.left = x;
    eyeBalls[i].style.top = y;
    eyeBalls[i].style.transform = "translate(-" + x + ",-" + y + ")";

  }
};

// function on() {
//   document.getElementById("overlay-me").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay-me").style.display = "none";
// }

$("#btnid1").click(function () {
  $("#overlay-me").fadeIn(500);
});

$("#portfoliomodal1").click(function(){
  $("#overlay-portfolio").fadeIn(500);
  $("#overlay-me").fadeOut(500);
})

$("#contactmodal1").click(function(){
  $("#overlay-contact").fadeIn(500);
  $("#overlay-me").fadeOut(500);
})


// circle2
$("#btnid2").click(function () {
  $("#overlay-me").fadeOut(500);
  $("#overlay-portfolio").fadeIn(500);

});

$(".footer2").click(function () {
  $("#overlay-portfolio").fadeOut(500);
});

$(".footer2").click(function () {
  $("#overlay-me").fadeOut(500);
});



// circle3

$(".footer2").click(function () {
  $("#overlay-contact").fadeOut(500);
});

$("#btnid3").click(function () {
  $("#overlay-contact").fadeIn(500);
  $("#overlay-me").fadeOut(500);
  $("#overlay-portfolio").fadeOut(500);

});

$("#btnresumeid").click(function () {
  $("#overlayresume").fadeIn(500);

});


$("#btnresumeidhide").click(function () {
  $("#overlayresume").fadeOut(500);

});



// <link rel="stylesheet" href="assets/css/style.css">

// <script type="text/javascript" src="./assets/javascript/app.js">

// 	background-image: url(../images/old-world-maps-wallpaper.jpg);

// 	 <img src="assets/images/Batman-Slapping-Robin.jpg" class="card-img-top" alt="...">
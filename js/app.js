var canvas = document.getElementById("canvas");
var counter = document.getElementById("text");
var counter = document.getElementById("text2");
var counter = document.getElementById("text3");
var counter = document.getElementById("text4");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  text.style.top = 2000 + y * .50 + "px";

  // counter.innerHTML = y + "px";
  if (y > 8000) {
    text4.style.top = "9000"}
  else if (y > 6000) {
    text3.style.top = "8000";
  }
  else if (y > 4000){
    text2.style.top = "6000";
  }
  else {
    text.style.top = "2000";
  }



  icon.style.top = 300 + y + "px";

  if(y > 7000){

    icon.src="img/end.jpg";

  }
  else if ( y > 5000){

    icon.src="img/middle.jpg";
  }
  else{

    icon.src="img/beginning.jpg";
 }

};

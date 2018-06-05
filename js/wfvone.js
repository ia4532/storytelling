var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = 2000 + y * .50 + "px";

  // counter.innerHTML = y + "px";

  if (y > 6000) {
    counter.style.top = "8000";
  }else if (y > 4000){
    counter.style.top = "6000";}
    else {
      counter.style.top = "2000"
    }


    icon.style.top = 300 + y  + "px";

  if(y > 7000){

    icon.src="img/hamster.jpg";

  }else if (y > 5000){

  icon.src="img/dog.jpeg";
 }
  else {
    icon.src="img/cat.jpg";
  }
};

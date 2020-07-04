var drumClassSelector = document.querySelectorAll(".drum");
var numberOfDrums = drumClassSelector.length;
for (var i = 0; i < numberOfDrums; i++) {
  drumClassSelector[i].addEventListener("click",   function (){
      // alert("I got clicked.");//This  is anonymous funtion when no name is provided.
      // if(this.innerHTML=="w"){
      //   var audio = new Audio("sounds/tom-1.mp3");
      //   audio.play();
      // }
      // if (this.innerHTML=="a") {
      //   var audio = new Audio("sounds/tom-2.mp3");
      //   audio.play();
      // }
      // if (this.innerHTML=="s") {
      //   var audio = new Audio("sounds/tom-3.mp3");
      //   audio.play();
      // }
      // if (this.innerHTML=="d") {
      //   var audio = new Audio("sounds/tom-4.mp3");
      //   audio.play();
      // }
      // if (this.innerHTML=="j") {
      //   var audio = new Audio("sounds/snare.mp3");
      //   audio.play();
      // }
      // if(this.innerHTML=="k"){
      //   var audio = new Audio("sounds/crash.mp3");
      //   audio.play();
      // }
      // if (this.innerHTML=="l") {
      //   var audio = new Audio("sounds/kick-bass.mp3");
      //   audio.play();
      // }
      var buttonInnerHTML = this.innerHTML;
      sounds(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keypress", function(event){
  // console.log(event);
  sounds(event.key);
  buttonAnimation(event.key);
});
function sounds(keys){
  switch (keys) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:console.log("other keys press");
  }
}
function buttonAnimation(presKey){
  var activeButton = document.querySelector("."+presKey).classList;
  activeButton.add("pressed");
  setTimeout(function(){
    activeButton.remove("pressed")
  }, 90);
}

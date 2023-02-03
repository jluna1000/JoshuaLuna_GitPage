//script below this comment is for index page, until next comment.
$('.message a').click(function(){
$('form').animate({height:"toggle", opacity:"toggle"},"slow");
});
//Script below this comment is for service page, until next comment.

var images = ["MotelLogo.jpg", "MotelOpen247.jpg", "MotelRoom.jpg", "MotelWelcoming.jpg"];
console.log(images)
var currentImage = 0;
function nextSlide(){
currentImage++;
if (currentImage >= images.length) {
currentImage = 0;
}
document.getElementById("slider").src = images[currentImage];
}
function prevSlide() {
currentImage--;
if (currentImage < 0) {
    currentImage = images.length-1;
}
document.getElementById("slider").src = images[currentImage];
}

var images2 = ["MotelLogo.jpg", "MotelOpen247.jpg", "MotelRoom.jpg", 
              "MotelWelcoming.jpg"];
              var currentImage = 0;

              function nextSlide2() {
              currentImage++;
              if (currentImage >= images2.length) {
              currentImage = 0;
              }
              document.getElementById("child2").style.backgroundImage = "url(" + images2[currentImage] + ")";
              }

              function prevSlide2() {
              currentImage--;
              if (currentImage < 0) {
              currentImage = images2.length-1;
              }
              document.getElementById("child2").style.backgroundImage = "url(" + images2[currentImage] + ")";
              }

              setInterval(nextSlide2, 2000);
//script below this comment is for contact page
//update:contact page page uses only html and css, until removal of this comment
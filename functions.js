let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("topbar").style.height = "0px";
    document.getElementById("tbtext").style.opacity = "0";
  } else {
    document.getElementById("topbar").style.height = "160px";
    document.getElementById("tbtext").style.opacity = "1";
  }
}
window.transitionToPage = function(href) {
  document.getElementById("overlay").style.height = "100%"
  setTimeout(function() { 
      window.location.href = href
  }, 300)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById("overlay").style.height = 0
})

document.getElementById("body").onscroll = function myFunction() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("main1");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}
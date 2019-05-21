
var prevScrollpos = window.pageYOffset;
var nav = document.getElementById("navbar");
var link = document.getElementById("link");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 50) {
    nav.style.backgroundColor = "transparent";
  } else {
    nav.style.backgroundColor = "black";
  }
}
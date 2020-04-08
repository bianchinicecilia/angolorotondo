let innerCircleRad, outerCircleRad, ww, wh;

window.addEventListener('resize', getElementSizes);
function getElementSizes() {
  let innerCircle = document.querySelector('.circle');
  let outerCircle = document.querySelector('.uterus');

  innerCircleRad = innerCircle.clientHeight / 2;
  outerCircleRad = outerCircle.clientHeight / 2;
  ww = outerCircle.offsetLeft + outerCircleRad, // center of outer circle
  wh = outerCircle.offsetTop + outerCircleRad;
}
getElementSizes();

document.addEventListener('mousemove', handler);

function handler(e) {
  e = e || window.event;

  let mx = e.pageX;
  let my = e.pageY;

  let distance = Math.hypot(mx - ww, my - wh);

  let xoffset = mx - ww;
  let yoffset = my - wh;

  if (distance > outerCircleRad - innerCircleRad) {
    let scaleDown = (outerCircleRad - innerCircleRad) / distance;
    xoffset *= scaleDown;
    yoffset *= scaleDown;
  }
  //document.querySelector('#inner-circle').style.transform = 'translate(' + (xoffset - innerCircleRad) + 'px, ' + (yoffset - innerCircleRad) + 'px)';
  gsap.to(".circle", {duration: 0.25, x: xoffset, y: yoffset});
}

/* MODAL */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

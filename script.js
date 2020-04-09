let innerCircleRad, outerCircleRad, ww, wh;

window.addEventListener('resize', getElementSizes);
function getElementSizes() {
  let innerCircle = document.querySelector('#inner-circle');
  let outerCircle = document.querySelector('#outer-circle');

  innerCircleRad = innerCircle.clientHeight / 2;
  outerCircleRad = outerCircle.clientHeight / 2;
  ww = outerCircle.offsetLeft + outerCircleRad, // center of outer circle
  wh = outerCircle.offsetTop + outerCircleRad;
}
getElementSizes();

document.addEventListener('mousemove', handler);
document.addEventListener('touchmove', handler);
function handler(e) {
  e = e || window.event;
  if('touches' in e) {
    e = e.touches[0];
  }
  let mousex = e.pageX;
  let mousey = e.pageY;

  let distance = Math.hypot(mousex - ww, mousey - wh);

  let xoffset = mousex - ww;
  let yoffset = mousey - wh;

  if (distance > outerCircleRad - innerCircleRad) {
    let scaleDown = (outerCircleRad - innerCircleRad) / distance;
    xoffset *= scaleDown;
    yoffset *= scaleDown;
  }
  //document.querySelector('#inner-circle').style.transform = 'translate(' + (xoffset - innerCircleRad) + 'px, ' + (yoffset - innerCircleRad) + 'px)';
  gsap.to('#inner-circle', {duration: 0.25, x: (xoffset), y: (yoffset)});
}

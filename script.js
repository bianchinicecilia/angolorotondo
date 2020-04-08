const innerCircleRad = 50;
const outerCircleRad = 272 - innerCircleRad;
let ww =  window.innerWidth / 2,
    wh = window.innerHeight / 2;
window.addEventListener('resize', function(event){
  ww =  window.innerWidth / 2,
  wh = window.innerHeight / 2;
});

document.addEventListener('mousemove', handler);

function handler(e) {
  e = e || window.event;

  let mx = e.pageX;
  let my = e.pageY;

  let distance = Math.hypot(mx - ww, my - wh);

  let xoffset = mx - ww;
  let yoffset = my - wh;

  if (distance > outerCircleRad) {
    let scaleDown = outerCircleRad / distance;
    xoffset *= scaleDown;
    yoffset *= scaleDown;
  }
  //document.querySelector('#inner-circle').style.transform = 'translate(' + (xoffset - innerCircleRad) + 'px, ' + (yoffset - innerCircleRad) + 'px)';
  gsap.to(".circle", {duration: 0.25, x: (xoffset - innerCircleRad), y: (yoffset - innerCircleRad)});
}

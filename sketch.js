//let tl = gsap.timeline();
//let o = {g1:0, g2:0, g3:0};
var d;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  d = pixelDensity();

  // timeline animation
  //tl.to(o, {g1: 400, duration:2},0);
  //tl.to(o, {g1: 0, duration:2},4);

  // Gif Loop (maybe replace with p5js gif library)
  //createLoop({duration:6, gif:false, open:true});
}


function draw() {
  // put drawing code here
  background(255);

  /*
  // loop over pixel at x,y
  // move this to a class to deal with pixels
  loadPixels();
  for (let i = 0; i < d; i += 1) {
    for (let j = 0; j < d; j += 1) {
      let index = 4 * ((y * d + j) * width * d + (x * d + i));
      // Red.
      pixels[index] = (pixels[index] === 0) ? 255 : 0;
      // Green.
      pixels[index + 1] = (pixels[index+1] === 0) ? 255 : 0;
      // Blue.
      pixels[index + 2] = (pixels[index+2] === 0) ? 255 : 0;
      // Alpha.
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  */
}

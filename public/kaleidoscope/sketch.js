function setup() {
  createCanvas(400,400);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  
  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2;
  
  stroke(255, 100);
  if (mouseIsPressed) {
    for( let i=0; i<12; i++) {
      rotate(360/12);

      let d = dist(mx, my, pmx, pmy);
      let sw = map(d, 0, 20, 20, 1);
      strokeWeight(sw);
      push();
      line(mx, my, pmx, pmy);
      scale(-1,1);
      line(mx, my, pmx, pmy);
      pop();
      
    }
  }
}


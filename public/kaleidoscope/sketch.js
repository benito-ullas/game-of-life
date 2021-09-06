let saveButton;
let clearButton;
let Slider;
let xoff = 0;

function setup() {
  createCanvas(800,800);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
  
  slider = createSlider(1,32,4, 0.1);
  
  saveButton = createButton('save');
  saveButton.mousePressed( () => save('snowflake.png'));
  
  clearButton = createButton('clear');
  clearButton.mousePressed( () => background(0));
}

function draw() {
  translate(width/2, height/2);
  
  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2;
  
  let hu = noise(xoff)*255;
  stroke(hu, 255, 255, 255);
  if (mouseIsPressed) {
    for( let i=0; i<6; i++) {
      rotate(360/6);

      //let d = dist(mx, my, pmx, pmy);
      //let sw = map(d, 0, 20, 20, 1);
      sw = slider.value();
      strokeWeight(sw);
      push();
      line(mx, my, pmx, pmy);
      scale(-1,1);
      line(mx, my, pmx, pmy);
      pop();
      
    }
  }
  xoff += 0.01;
}


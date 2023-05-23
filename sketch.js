let slider;
function setup() {
  createCanvas(1080, 720);
  
  slider =  createSlider(0,900);
  
}


function draw() {
  background(0);
  new Branch(width/2, height, map(slider.value(), 0, width, 0, PI/2 ), 200, 0, 8);
  
}





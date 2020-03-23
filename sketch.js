function setup() {
  createCanvas(400, 400);
}

//draw the background and ellipse
function draw() {
  var color_r = map(mouseX, 0, width, 0, 255);
  var color_g = map(mouseY, 0, width, 0, 255);
  var color_b = map(mouseX, 0, width, 0, 255);
  
  background(color_r, color_g, color_b);
  ellipse(mouseX, mouseY, 20);
  fill(255);
  //printing mouse pointer x value in a box.
  text("X value:"+mouseX, 10, 10, 70, 80);
  text("Y value:"+mouseY, 10, 30, 70, 80);
}
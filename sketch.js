let starPosition;
//custom variable - star

function setup() {
  createCanvas(400, 400);
  starPosition = createVector(width / 2, height / 2); 
}

function draw() {
  background(32, 73, 179);
  
  //generate random sparkles around the star
  for (let i = 0; i < 10; i++) {
    let sparkleX = starPosition.x + random(-20, 20);
    let sparkleY = starPosition.y + random(-20, 20);
    drawSparkle(sparkleX, sparkleY);
    //coordinates to random value
  }
  
  //positioning the star to follow the cursor
  starPosition.x = mouseX;
  starPosition.y = mouseY;
  
  //drawing the star
  fill(255, 250, 119); //pale yellow color
  stroke(240, 255, 255); //silver outline
  strokeWeight(3); //thickening the stroke
  starShape(starPosition.x, starPosition.y, 10, 25, 5);
}

//customstar shape function
function starShape(x, y, radius1, radius2, npoints) {
  //x,y coordinates,radii, # of points, 2pi =full circle
  //positioning inner vertices of the star between the outer vertices
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//custom sparkle function
function drawSparkle(x, y) {
  noStroke();
  fill(255, 255, 255);
  ellipse(x, y, 3, 3);
}

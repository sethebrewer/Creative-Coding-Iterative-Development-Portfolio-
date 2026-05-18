let myFont;
function preload() {//load title font 
  myFont = loadFont('Orbitron-VariableFont_wght.ttf');
}
let angle = 0;
let liquidParticles = [];
let flowers = [];

function setup() {
  createCanvas(600, 600, WEBGL);// makes the canvas 3d
  noStroke();
  for (let i = 0; i < 50; i++) {// create 25 flowers 

  flowers.push({
  x: random(-300, 300),
  y: random(-300, 300),
  z: random(-300, 300),/// anywhere on screen 

  rot: random(TWO_PI),
  rotSpeed: random(-0.03, 0.03),

  size: random(8, 20),

  color: color(
    random(180,255),
    random(50,180),
    random(180,255)
  )
});

}
  textFont(myFont);// help make the font not apply to the 3dyness 
}

function draw() {
  background(0,0,0);

  

  rotateY(angle);
  rotateY(PI); // shift so Atlantic is roughly centered
  angle += 0.003;

  //draw the planet
  drawEarth(100);
  drawFlowers();

  
  rotateY(0.5);   // half facing camera
  rotateZ(-0.5);  // pouring tilt

  // slight animation (optional)
  rotateZ(sin(frameCount * 0.02) * 0.05);
  
  //cup
  translate(0,-200,0)
  push();
  rotateZ(PI - (PI * 0.2));//changed the angle of the pour
  drawCup(30, 80);
  pop()
  //liquid
  push();
  rotateZ(PI - (PI * 0.2));
  drawLiquid();
  pop();
  //title for album 
  push();
  resetMatrix(); // stops text from the 3d transform
  translate(-width / 2, -height / 2); // go to bottom 
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("WRLD ON DRUGS", width / 2, height - 90);
  pop();
  push();
  resetMatrix(); // stops text from the 3d transform
  translate(-width / 2, -height / 2); // go to bottom 
  fill(255);
  textSize(13);
  textAlign(CENTER, CENTER);
  text("Future and Juice Wrld present", width / 2, height - 50);
  pop();
  
  
}

function drawEarth(r) {
  let detail = 40;

  for (let i = 0; i < detail; i++) {
    let lat1 = map(i, 0, detail, -HALF_PI, HALF_PI);
    let lat2 = map(i + 1, 0, detail, -HALF_PI, HALF_PI);

    beginShape(TRIANGLE_STRIP);

    for (let j = 0; j <= detail; j++) {
      let lon = map(j, 0, detail, -PI, PI);

      vertexOnSphere(r, lat1, lon);
      vertexOnSphere(r, lat2, lon);
    }

    endShape();
  }
}
function vertexOnSphere(r, lat, lon) {
  let x = r * cos(lat) * cos(lon);
  let y = r * sin(lat);
  let z = r * cos(lat) * sin(lon);

  // Use noise to decide land vs ocean
  let n = noise(
    cos(lat) * cos(lon) + 1,
    sin(lat) + 1,
    cos(lat) * sin(lon) + 1
  );

  if (n > 0.5) {
    fill(60, 140, 60); // land
  } else {
    fill(35, 138, 161); // ocean
  }

  vertex(x, y, z);
}

function drawCup(radius, height) {
  let detail = 40;

  // Cup body 
  beginShape(TRIANGLE_STRIP);

    for (let i = 0; i <= detail; i++) {

      let angle = map(i, 0, detail, 0, TWO_PI);

      let rTop = radius * 1.1;
      let rBottom = radius * 0.8;

      let xTop = rTop * cos(angle);
      let zTop = rTop * sin(angle);

      let xBot = rBottom * cos(angle);
      let zBot = rBottom * sin(angle);

      fill(245);
      vertex(xTop, -height / 2, zTop);
      vertex(xBot, height / 2, zBot);
    }

  endShape();


// LIQUID INSIDE CUP 
push();
fill(120, 0, 200, 220);
translate(0, -10, 0);
rotateZ(-0.15);
scale(1, 0.35, 1);
sphere(radius * 0.9);
pop();

  // Rim
  push();
  fill(0,0,0)
  translate(0, -height / 2, 0);
  fill(255);
  rotateX(HALF_PI);
  torus(radius * 1.05, 4);
  pop();

  // Bottom
  push();
  fill(0,0,0)
  translate(0, height / 2, 0);
  rotateX(HALF_PI)//makes it so it is horizontal relative to the earth 
  fill(230);
  circle(0, 0, radius * 1.6);
  pop();
}

function drawLiquid() {
  push();
  rotateZ(PI - (PI * 1.2));

// opening
for (let i = 0; i < 10; i++) {

  // spread across cup lip
  let t = map(i, 0, 9, -1, 1);

let origin = createVector(
  34,
  -20 + t * 8,
  t * 10
);
  let dir = createVector(1.2, 0.2, 0);

  // small randomness
  dir.x += random(-0.1, 0.1);
  dir.y += random(-0.05, 0.05);
  dir.z += random(-0.05, 0.05);

  dir.mult(random(1, 1.5));

  liquidParticles.push({
    pos: createVector(origin.x, origin.y, origin.z),
    vel: dir,
    size: random(3, 6)
  });
}



// update + draw
for (let i = liquidParticles.length - 1; i >= 0; i--) {
  let p = liquidParticles[i];

   // thick liquid gravity
p.vel.y += 0.03;

// viscosity damping
p.vel.mult(0.99);

// slight horizontal drag
p.vel.x *= 0.98;

  for (let other of liquidParticles) {

  if (other === p) continue;

  let d = p5.Vector.dist(p.pos, other.pos);

  if (d < 20) {

    let force = p5.Vector.sub(other.pos, p.pos);

    force.normalize();

    // attraction strength
    force.mult(0.02);

    p.vel.add(force);
  }
}
// move
p.pos.add(p.vel);

  push();
  translate(p.pos.x, p.pos.y, p.pos.z);
  fill(120, 0, 200, 180);
  sphere(p.size);
  pop();

  if (p.pos.y > 300) {
    liquidParticles.splice(i, 1);
  }
}

pop();


}
function drawFlowers() {

  for (let f of flowers) {

    push();

    // orbit around Earth
    translate(f.x, f.y, f.z);// random place on screen 

    // self rotation
    rotateZ(f.rot);

    drawFlower(f.size, f.color);

    pop();

    // animate
    f.orbitAngle += f.orbitSpeed;
    f.rot += f.rotSpeed;
  }
}
function drawFlower(size, flowerColor) {

  fill(flowerColor);

  for (let i = 0; i < 6; i++) {

    push();
    rotateZ((TWO_PI / 6) * i);
    translate(size * 0.6, 0, 0);
    sphere(size * 0.35);
    pop();
  }

  // center
  fill(255, 220, 0);
  sphere(size * 0.3);
}
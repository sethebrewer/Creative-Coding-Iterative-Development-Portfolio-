let moveVal = 0;
let stars= [];



function setup() {
  createCanvas(400, 400);
  for(let i=0;i<15;i++){
    stars.push(new makeStars(random(25,350),random(10,250)))
  }
    
  
}

function draw() {
  background(18,22,21);

  for (let s of stars) {
    s.display();
  }

  sunsetRise(); 
  horizonLine();
}

function horizonLine(){
  fill(16,21,17);
  rect(0,325,width,75);
}
function sunsetRise(){
  let scaleFactor = 1.5;

  let cx = width / 2;
  let cy = 300;

  let baseW = 200;
  let baseH = 200;

  let w = baseW * scaleFactor;
  let h = baseH * scaleFactor;

  fill(205,105,30);
  rect(cx, cy, w, h);
  
  for (let i = 30; i > 0; i--) {
    let alpha = 50;

    let colour1 = color(39, 53, 54);
    let colour2 = color(205, 105, 30);

    let inter = map(i, 30, 0, 0, 1);
    let colour = lerpColor(colour1, colour2, inter);

    fill(red(colour), green(colour), blue(colour),alpha);
    noStroke();

    // now offsets are relative to center
    let xOffset = -i * 3;
    let yOffset = -i * 3;

    let w2 = (baseW + i*0.8) * scaleFactor;
    let h2 = (50 + i) * scaleFactor;

    rect(cx + xOffset , cy + yOffset, w2, h2);
  }
  for (let i = 30; i > 0; i--) {
    let alpha = 50;

    let colour1 = color(39, 53, 54);
    let colour2 = color(205, 105, 30);

    let inter = map(i, 30, 0, 0, 1);
    let colour = lerpColor(colour1, colour2, inter);

    fill(red(colour), green(colour), blue(colour),alpha);
    noStroke();

      let xOffset = +i * 3;
      let yOffset = -i * 3;
      let w2 = (baseW + i*0.8) * scaleFactor;
      let h2 = (50 + i) * scaleFactor;
      rect(cx + xOffset + moveVal, cy + yOffset, w2, h2);
}
}
class makeStars{constructor(xCoord,yCoord){
  let x = 0;
  let y= 0;
  
  this.x =xCoord;
  this.y = yCoord;
}
  display(){
    let distanceToStar= dist(mouseX,mouseY,this.x,this.y);
    if (distanceToStar<50){
      this.drawStar();
    }
    else{
      this.drawCircle();
    }
  }
  drawStar(){
    noStroke();
    fill(255,255,255);
    beginShape();// had to look this up as maths is not my strong  point and i was losing my mind
    for (let i = 0; i < 10; i++) {
      let angle = i * TWO_PI / 10;
      let r = (i % 2 === 0) ? 5: 5 / 2;

      let sx = this.x + cos(angle) * r;
      let sy = this.y + sin(angle) * r;

      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  drawCircle(){
      noStroke();
      fill(255,255,255);
      circle(this.x,this.y,5);
    }
    
}
            
  


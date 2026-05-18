let skyLines = [];
let zone = {
  minX: 50,
  maxX: 100,
  minY: 50,
  maxY: 100
};
var numSamples=30;

function setup() {
  createCanvas(400, 400);

  fill(194, 49, 85);
  square(0,0,400); 
}

function draw() {

  // redraw background every frame
  background(194, 49, 85);

  horizonLine();

  // Move + draw sky lines
  for (let l of skyLines) {

  let d = dist(l.x1, l.y1, 100, 200);

  if (d < 100) {
    stroke(135, 206, 235); // blue inside circle
  } else {
    stroke(l.redVal, l.greenVal, l.blueVal); // normal outside
  }

  strokeWeight(2);
  line(l.x1, l.y1, l.x2, l.y2);
}
  strokeWeight(2);//thickness
  
  
  topWave(width +0, height - 220,190,90,84);
  topWave(width +0, height - 225,188,88,84);
  topWave(width +0, height - 230,186,85,84);
  topWave(width +0, height - 235,184,82,84);
  topWave(width +0, height - 240,182,80,84);
  topWave(width +0, height - 245,181,78,84);
  topWave(width +0, height - 250,180,76,84);
  topWave(width +0, height - 255,179,74,84);
  topWave(width +0, height - 260,179,72,84);
  topWave(width +0, height - 265, 175, 70, 83);
  topWave(width +0, height - 270, 170, 67, 83);
  topWave(width +0, height - 275, 165, 63, 83);
  topWave(width +0, height - 280, 160, 60, 83);
  topWave(width +0, height - 285, 155, 57, 83);
  topWave(width +0, height - 290, 150, 54, 83);
  topWave(width +0, height - 295, 145, 51, 83);
  topWave(width +0, height - 300, 140, 48, 83);
  topWave(width +0, height - 305, 135, 45, 83);
  topWave(width +0, height - 310, 133, 43, 83);
  topWave(width +0, height - 315,131,40,94);
  
  
  
  individualSkyLine();  // adds THe lines 
  trapeziumForTheBoat();
  drawMoon();
  boatShading();
  
}

function horizonLine(){
  //fill(255,255,255);
  //rect(0,200,400,1);
}
function trapeziumForTheBoat(){
  fill(189, 5, 88);//set color 
  noStroke();//no outline
  triangle(150,230,170,250,170,230);//left triangle
  triangle(220,230,210,250,210,230);//right one
  rect(170,230,40,20);//rectangle connecting th etwo 
}
function boatShading(){
  fill(137, 19, 90)//light colour 
  rect(200,230,12,2);
  rect(204,232,8,2);
  rect(208,234,4,2);
  rect(202,248,8,2);
  rect(206,246,4,3);
  rect(202,244,10,2);
  rect(200,242,12,2);
  rect(208,240,4,2);
  rect(200,238,12,2);
  //end of light colour 
  fill(97, 24, 93);//darker colour 
  triangle(150,230,170,250,158,230);
  
  rect(204,230,8,2);
  rect(206,232,6,2);
  rect(210,234,2,2);
  rect(204,248,6,2);
  rect(209,246,2,3);
  rect(206,244,6,2);
  rect(204,242,8,2);
  rect(210,240,2,2);
  rect(204,238,8,2);
  triangle(150,230,170,250,170,240);
  //end of dark colour
  //left side shading
  fill(137, 19, 90)
  rect(157,230,50,2);
  rect(157,232,12,2);
  rect(157,234,8,2);
  rect(170,248,18,2);
  rect(170,246,8,3);
  rect(166,244,16,2);
  rect(166,242,18,2);
  rect(164,240,6,2);
  rect(166,238,16,2);
  //end of light colour 
  fill(97, 24, 93);
  triangle(220,230,210,250,212,230);
  rect(157,230,20,2);
  rect(157,232,8,2);
  rect(157,234,4,2);
  rect(170,248,8,2);
  rect(170,246,4,3);
  rect(166,244,10,2);
  rect(166,242,12,2);
  rect(164,240,4,2);
  rect(166,238,12,2);
  
}
function drawMoon(){
  fill(90, 203, 233);//darkest cyan 
  circle(261,164,16);
  fill(100, 223, 240);//medium of cyan and white
  circle(261,164,11);
  fill(109, 233, 255);// almost white 
  circle(261,164,6);
  
}


function individualSkyLine() {

  if (frameCount % 1 === 0&& skyLines.length < 2500) {
    let y = random(0, 250);//y coord for lines 
    let length = random(40, 120);// making the lines vary in                                       width to add authenticity 
    let x = random(-40, 440);// allows lines to go off the page so that the edges are seamless 
    let slightTilt = random(-10, 10);// makes the lines lean                                           slightly so theyre not                                          all dead straight 
    skyLines.push({
      x1: x,//first x 
      y1: y,// first y 
      x2: x + length,// makes so the thing wont go off the                             page 
      y2: y + slightTilt,// applying the lean 
      
      
     
      redVal:random(120, 200),
      greenVal: random(15, 40),
      blueVal: random(90, 140),
    });
  }

}
function blueStreaks(){
  fill (135, 206, 235,40)

  quad(200,45,180,60,80,150,130,150)

}


function topWave(xCoord,yCoord,rColor,gColor,bColor){

  fill(rColor,gColor,bColor);
  let areaX = width - xCoord;
  let areaY = height - yCoord;
  let areaW = 400;
  let areaH =200;

  for (let k = 0; k < 5; k++) {

    beginShape();
    

    // bottom corners of small area
    noStroke();
    vertex(areaX + areaW, areaY + areaH);
    vertex(areaX, areaY + areaH);
    
    let layerGapSpacing = areaH/3;

    for (let i = 0; i < numSamples; i++) {

      let vx = areaX+i*areaW/(numSamples - 1);
  
      let maxWaveHeight = 40;//makes waves not span the total                                area of the shape
      let vy = areaY +
         layerGapSpacing * k +
         maxWaveHeight  * noise(k + i * 0.1, frameCount / 50);
      //only want these waves going up as theyre farther away so less choppy 


      vertex(vx, vy);
    }

    endShape(CLOSE);
  }
}
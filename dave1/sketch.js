let skyLines = [];

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

    stroke(l.redVal, l.greenVal, l.blueVal);//colour vals to                                                 random them 
    strokeWeight(2);//thickness
    line(l.x1, l.y1, l.x2, l.y2);//coordinates of the lins 
  
  }
  if (frameCount % 200 === 0) {   // every 60 frames (~1 second)

  
}
  topWave(width +0, height - 215);
  waves(width-350,height-220,176, 28, 118);//increment height                                            less as higher up                                              to emulate distance 
  waves(width-300,height-220,176, 28, 118);
  waves(width-250,height-220,176, 28, 118);
  waves(width-200,height-220,93, 39, 103);
  waves(width-150,height-220,93, 39, 103);
  waves(width-100,height-220,176, 28, 118);
  waves(width-50,height-220,176, 28, 118);
  waves(width+ 0,height-220),176, 28, 118;
  waves(width-350,height-240,176, 28, 118);
  waves(width-300,height-240,176, 28, 118);
  waves(width-250,height-240,176, 28, 118);
  waves(width-200,height-240,199, 80, 86);
  waves(width-150,height-240,199, 80, 86);
  waves(width-100,height-240,199, 80, 86);
  waves(width-50,height-240,176, 28, 118);
  waves(width+ 0,height-240,176, 28, 118);
  waves(width-350,height-260,176, 28, 118);
  waves(width-300,height-260,176, 28, 118);
  waves(width-250,height-260,176, 28, 118);
  waves(width-200,height-260,199, 80, 86);
  waves(width-150,height-260,199, 80, 86);
  waves(width-100,height-260,199, 80, 86);
  waves(width-50,height-260,176, 28, 118);
  waves(width+ 0,height-260,176, 28, 118);//dark pink 
  waves(width-350,height-280,176, 28, 118);
  waves(width-300,height-280,176, 28, 118);
  waves(width-250,height-280,199, 80, 86);
  waves(width-200,height-280,199, 80, 86);//light peach 
  waves(width-150,height-280,199, 80, 86);
  waves(width-100,height-280,199, 80, 86);
  waves(width-50,height-280,176, 28, 118);
  waves(width+ 0,height-280,176, 28, 118);
  waves(width-350,height-310,176, 28, 118);
  waves(width-300,height-310,176, 28, 118);
  waves(width-250,height-310);
  waves(width-200,height-310);
  waves(width-150,height-310);
  waves(width-100,height-310);
  waves(width-50,height-310);
  waves(width+ 0,height-310);
  bigWaves(width-350,height-350,187, 74, 87);
  bigWaves(width-300,height-350,187, 74, 87);
  bigWaves(width-250,height-350,187, 74, 87);
  bigWaves(width-200,height-350,187, 74, 87);
  bigWaves(width-150,height-350,187, 74, 87);
  bigWaves(width-100,height-350,187, 74, 87);
  bigWaves(width-50,height-350,187, 74, 87);
  bigWaves(width+ 0,height-350,187, 74, 87);
  
  
  individualSkyLine();  // adds THe lines 
  trapeziumForTheBoat();
  drawMoon();
  boatShading();
  blueStreaks();
  
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
function waves(xCoord,yCoord,rColour,gColour,bColour){
 let areaX = width - xCoord;
  let areaY = height - yCoord;
  let areaW = 50;
  let areaH =50;

  for (let k = 0; k < 5; k++) {

    beginShape();
    fill(rColour, gColour, bColour);

    // bottom corners of small area
    noStroke();
    vertex(areaX + areaW, areaY + areaH);
    vertex(areaX, areaY + areaH);
    
    let layerGapSpacing = areaH/3;

    for (let i = 0; i < numSamples; i++) {

      let vx = areaX+i*areaW/(numSamples - 1);

      let vy = areaY +
         layerGapSpacing * k +
         areaH  * noise(k + i * 0.1, frameCount / 50);
      //only want these waves going up as theyre farther away so less choppy 


      vertex(vx, vy);
    }

    endShape(CLOSE);
  }


}
function bigWaves(xCoord,yCoord,rColour,gColour,bColour){
 let areaX = width - xCoord;
  let areaY = height - yCoord;
  let areaW = 50;
  let areaH =100;

  for (let k = 0; k < 5; k++) {

    beginShape();
    fill(rColour,gColour,bColour);

    // bottom corners of small area
    noStroke();
    vertex(areaX + areaW, areaY + areaH);
    vertex(areaX, areaY + areaH);
    
    let layerGapSpacing = areaH/5;

    for (let i = 0; i < numSamples; i++) {

      let vx = areaX+i*areaW/(numSamples - 1);

      let vy = areaY +
         layerGapSpacing * k +
         areaH  * (noise(k + i * 0.1, frameCount / 50)-0.5);//makes waves go up and down 


      vertex(vx, vy);
    }

    endShape(CLOSE);
  }
}
function topWave(xCoord,yCoord){

let areaX = width - xCoord;
  let areaY = height - yCoord;
  let areaW = 400;
  let areaH =200;

  for (let k = 0; k < 5; k++) {

    beginShape();
    fill(168, 56, 94);

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

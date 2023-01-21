let x = 100;
let y = 100;
let s = 0.5;
/*
  My really nice emoji created for the
  Foundations of Programming course at
  the Jönköping University 2022
*/

//background color
background(30, 30, 30);

//orange background of emoji
strokeWeight(20 * s);
stroke(255, 120, 0);
fill(252, 149, 44);
ellipse(x + 200 * s, y + 100 * s, 500 * s);

//EYES
//left eye
noStroke();
fill(124, 27, 22);
ellipse(x + 130 * s, y + 205 * s, 60 * s, 70 * s);
//right eye
noStroke();
fill(124, 27, 22);
ellipse(x + 270 * s, y + 205 * s, 60 * s, 70 * s);

//mouth
noStroke();
fill(124, 27, 22);
ellipse(x + 200 * s, y + 370 * s, 150 * s, 60 * s);

//tounge
fill(255, 51, 155);
rect(x + 140 * s, y + 370 * s, 120 * s, 70 * s);

fill(255, 51, 155);
arc(x + 200 * s, y + 440 * s, 120 * s, 100 * s, 0, PI);

//teardrop
fill(0, 200, 255);
beginShape();
vertex(x + 0 * s, y + 250 * s);
bezierVertex(+x * s, y + 500 * s, x + 200 * s, y + 500 * s, x * s, y + 250 * s);
endShape();
//white dot
noStroke();
fill(255, 255, 255);
ellipse(x + 30 * s, y + 360 * s, 15 * s, 25 * s);

// let question(waddup ma boi);

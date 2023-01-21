/*
  My really nice emoji created for the
  Foundations of Programming course at
  the Jönköping University 2022
*/

//just tried a variable here
let eyeHeight = 305;

//background color
background(30, 30, 30);

//orange background of emoji
strokeWeight(20);
stroke(255, 120, 0);
fill(252, 149, 44);
ellipse(300, 300, 500);

//EYES
//left eye
noStroke();
fill(124, 27, 22);
ellipse(230, eyeHeight, 60, 70);
//right eye
noStroke();
fill(124, 27, 22);
ellipse(370, eyeHeight, 60, 70);

//mouth
noStroke();
fill(124, 27, 22);
ellipse(300, 470, 150, 60);

//tounge
fill(255, 51, 155);
rect(240, 470, 120, 70);

fill(255, 51, 155);
arc(300, 540, 120, 100, 0, PI);

//teardrop
fill(0, 200, 255);
beginShape();
vertex(100, 350);
bezierVertex(-100, 600, 300, 600, 100, 350);
endShape();
//white dot
noStroke();
fill(255, 255, 255);
ellipse(130, 460, 15, 25);

//Eyebrows
fill(124, 27, 22);
//the first 19 lines underneath of code is inspired by https://www.youtube.com/watch?v=_DFwhXEtVWU
//left
beginShape();
vertex(362, 155);
bezierVertex(362, 155, 363, 121, 374, 149);
bezierVertex(374, 149, 380, 172, 394, 174);
bezierVertex(394, 174, 409, 176, 414, 181, 417, 185);
bezierVertex(417, 185, 420, 190, 410, 193, 398, 192);
bezierVertex(398, 192, 362, 188, 362, 155);
endShape();

//right
beginShape();
vertex(238, 155);
bezierVertex(238, 155, 238, 121, 226, 149);
bezierVertex(226, 149, 220, 172, 206, 174);
bezierVertex(206, 174, 192, 176, 187, 181, 183, 185);
bezierVertex(183, 185, 180, 190, 190, 193, 203, 192);
bezierVertex(203, 192, 238, 188, 238, 155);
endShape();

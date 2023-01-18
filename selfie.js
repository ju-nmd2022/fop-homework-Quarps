//center of object
let x = 300;
let y = 300;

//edit body color
let bodyColorRed = 255;
let bodyColorGreen = 141;
let bodyColorBlue = 28;

//edit shadow color
let shadowColorRed = 191;
let shadowColorGreen = 96;
let shadowColorBlue = 13;

//edit headline
let headline = "PANTONE";
//edit colorName
let colorName = "SUS ORANGE";

//edit scale
let selfieScale = 0.65;

//canvas background
background(bodyColorRed, bodyColorGreen, bodyColorBlue);
angleMode(degrees);

push();
translate(100, 100);
scale(selfieScale);
strokeWeight(5);

//card
fill(255, 255, 255);
rect(25, -20, 600, 850);

//background of card
push();

fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
rect(50, 0, 550, 550);

pop();

//body
fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
rect(x - 150, y, 300, 250);
ellipse(x, y, 300, 250);

push();
noStroke();

//rectangle which hides a stroke element
rect(155, y, 289, 230);

//shadow on body
beginShape();
fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
vertex(153, 490);
vertex(153, 548);
vertex(448, 548);
vertex(448, 300);
bezierVertex(448, 300, 350, 500, 153, 490);
endShape();

pop();

//backpack
fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
rect(450, 375, 100, 175, 0, 50, 0);

//shadow on backpack
push();

noStroke();
fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
rect(452.5, 407.5, 95, 140, 0, 50, 0);

pop();

//glasses
fill(159, 202, 229);
rect(75, 280, 250, 150, 100);

push();

noStroke();

//white dot on the glasses
fill(244, 244, 255);
ellipse(170, 320, 110, 40);

pop();

//hat
push();
selfieScale = 0.8;

translate(0, -35);
rotate(0.2);
scale(selfieScale);
translate(140, -35);

//purple triangle
fill(200, 0, 200);
triangle(400, 250, 310, 50, 230, 250);

//small line on the hat
beginShape();
noStroke();
fill(255, 255, 0);
vertex(290, 106);
vertex(281, 127);
vertex(348, 138);
vertex(336, 114);
endShape();

//big line on hat
beginShape();
noStroke();
fill(255, 255, 0);
vertex(261, 178);
vertex(244, 220);
vertex(393, 238);
vertex(374, 197);
endShape();
pop();

//headline
fill(0, 0, 0);
textSize(70);
text(headline, 50, 620);

//text
fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
textSize(60);
text(colorName, 50, 690);

pop();

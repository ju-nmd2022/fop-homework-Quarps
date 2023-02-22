function ufo(x, y, s, r) {
  //microwave
  push();
  translate(x, y);
  scale(s);
  //body microwave
  push();
  background(255, 255, 255);
  noStroke();
  translate(350, 250);
  fill(100, 100, 100);
  rect(-175, -125, 500, 300, 10);

  //glas on the microwave
  stroke(0, 0, 0);
  fill(50, 50, 50);
  rect(-160, -110, 350, 270, 10);
  translate(0, 0);
  pop();

  //reflection of the glas (main & side)
  //main reflection
  push();
  beginShape();
  stroke(205, 205, 205);
  vertex(410, 141);
  vertex(270, 409);
  vertex(325, 409);
  vertex(460, 141);
  endShape();
  //side reflection
  beginShape();
  vertex(489, 141);
  vertex(356, 409);
  vertex(370, 409);
  vertex(500, 141);
  endShape();
  pop();

  //divider, line
  beginShape();
  vertex(555, 126);
  vertex(555, 424);
  endShape();
  fill(0, 0, 0);

  //display
  noStroke();
  fill(50, 50, 50);
  rect(570, 170, 90, 50, 3);

  //numbers on the display
  text(123, 123, "hei");

  //wheel of controlling time
  push();
  fill(15, 15, 14);
  ellipse(615, 340, 50);
  pop();

  pop();
}

ufo(0, 0, 1, 0);

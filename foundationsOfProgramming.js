//07: FUNCTIONS - PARAMETER

// function eye(x, y) {
//   fill(255, 255, 255);
//   ellipse(x, y, 30);

//   fill(0, 0, 0);
//   ellipse(x, y, 10);
// }

// eye(50, 30);
// eye(100, 30);

//07: FUNCTIONS - RETURN
//MULTIPLY
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(42, 7));

//CALCULATE CENTER
// function calculateCenter(poistion, size) {
//   return size / 2 + poistion;
// }
// const w = 100;
// const h = 600;

// fill(255, 255, 0);
// rect(100, 100, w, h);

// const x = calculateCenter(100, w);
// const y = calculateCenter(100, h);

// fill(255, 0, 0);
// ellipse(x, y, 50);

//08: LETS MOVE THINGS
// let x = 100;
// let y = 100;
// let w = 50;

// function draw() {
//   clear();
//   ellipse(x, y, 50);
//   rect(50, 200, w, 50);

//   x += 3;
//   y += 0;
//   w += 3;
// }

//09: MOUSE POSITION
// function draw() {
//   background(180, 180, 180, 100);
//   noStroke();
//   rect(mouseX, mouseY, 30);
// }

//09: LET YOUR EMOJI GROW
// function draw() {
//   clear();
//   eye(width / 2, height / 2, Math.max(0.1, (mouseX / width) * 2));
// }

//09: BUILD A SIMPLE DRAWING PROGRAM // CHANGE COLOR
// let lastX = 0;
// let lastY = 0;

// function draw() {
//   strokeWeight(10);
//   stroke((mouseX / width) * 255, (mouseY / height) * 255, 0);
//   line(lastX, lastY, mouseX, mouseY);

//   lastX = mouseX;
//   lastY = mouseY;
// }

//09: MOUSE BUTTONS
// function mousePressed() {
//   console.log("Button was pressed");
// }

// function mouseReleased() {
//   console.log("Button was released");
// }

// //when both above is used
// function mouseClicked() {
//   console.log("Button was clicked");
// }

//09: CHANGE THE SIZE ON CLICK
// let size = 10;

// function mouseClicked() {
//   size += 10;
// }

// function draw() {
//   ellipse(width / 2, height / 2, size);
// }

//09: DRAW EMOJI ON CLICK
// function mouseClicked() {
//   eye(mouseX, mouseY, 0.5);
// }

//09: EXERCISE - DRAWING PROGRAM
// let lastX = width / 2;
// let lastY = height / 2;

// function mouseClicked() {
//   line(lastX, lastY, mouseX, mouseY);

//   lastX = mouseX;
//   lastY = mouseY;
// }

//10: CONDITIONS AND CONDITIONAL STATMENTS
// function draw() {
//   if (mouseX < 300) {
//     background(255, 0, 130);
//   } else if (mouseX < 500) {
//     background(255, 255, 231);
//   } else {
//     background(0, 255, 231);
//   }
// }

// 10: EXERCISE - ANIMATE THE EMOJI - RECTANGLE FORWARD TO BACKWARD
// let x = -150;
// let direction = "forward";

// function draw() {
//   background(0, 0, 0);
//   fill(255, 141, 0);
//   rect(x, 100, 150);

//   if (direction === "forward") {
//     if (x < 400) {
//       x += 30;
//     } else {
//       direction = "backward";
//     }
//   } else if (direction === "backward") {
//     if (x > 0) {
//       x -= 100;
//     } else {
//       direction = "forward";
//     }
//   }
// }

// 10: EXERCISE DRAWING PROGRAM
// let lastX = 0;
// let lastY = 0;
// let mouseIsActive = false;

// function draw() {
//   stroke(255, 255, 255);
//   strokeWeight(10);
//   if (mouseIsPressed) {
//     if (mouseIsActive) {
//       line(mouseX, mouseY, lastX, lastY);
//     }

//     lastX = mouseX;
//     lastY = mouseY;
//     mouseIsActive = true;
//   } else {
//     mouseIsActive = false;
//   }
// }

//10: USING STATES
// function startScreen() {
//   background(0, 0, 255);
//   text("Start", width / 2 - 25, height / 2);
// }

// function gameScreen() {
//   background(255, 255, 0);
//   text("Game", width / 2 - 25, height / 2);
// }

// function endScreen() {
//   background(0, 255, 0);
//   text("End", width / 2 - 25, height / 2);
// }

// let state = "start";
// let gameTimer = 0;

// function draw() {
//   if (state === "start") {
//     startScreen();
//   } else if (state === "game") {
//     gameScreen();
//     gameTimer += 1;
//     if (gameTimer >= 100) {
//       gameTimer = 0;
//       state = "end";
//     }
//   } else {
//     endScreen();
//   }
// }
// function mouseClicked() {
//   if (state === "start") {
//     state = "game";
//   } else if (state === "end") {
//     state = "game";
//   }
// }

// (första punkten X, första punkten Y, första Kontrollpunkten X, första Kontrollpunkten Y, sista punkten X, sista punkten Y )
// background(255, 255, 255);

// beginShape();
// fill(232, 231, 0);
// vertex(100, 200);
// bezierVertex(100, 200, 150, 250, 200, 200);
// bezierVertex(200, 200, 250, 300, 300, 180);
// endShape();

//11: LOGICAL OPERATORS

// function draw() {
//   if (mouseX <= 200 || mouseX >= 400) {
//     background(255, 255, 255);
//   } else {
//     background(255, 255, 0);
//   }
// }
//"&&" (and)
//"||" (or)

//11: Exercise - Animate your emoji

// let x = 100;
// let speed = 20;

// function draw() {
//   background(255, 255, 255);
//   ellipse(x, 200, 100);
//   x += speed;

//   if (x > 600 || x < 100) {
//     speed *= -1;
//   }
// }

//11: EXERCISE - CREATE A BUTTON
// function button(x, y, w, h) {
//   noStroke();
//   fill(100, 20, 1);
//   rect(x, y, w, h);

//   fill(255, 255, 255);
//   text("Hello", x + w / 2, y + h / 2);
// }
// let buttonIsClicked = false;

// function draw() {
//   if (buttonIsClicked) {
//     background(255, 100, 0);
//   } else {
//     background(25, 25, 200);
//   }

//   button(100, 100, 200, 60);
// }

// function mousePressed() {
//   if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 100 && mouseY < 100 + 60) {
//     buttonIsClicked = true;
//   }
// }
// function mouseReleased() {
//   buttonIsClicked = false;
// }

//12: KEYBOARD OUTPUT
// function keyPressed() {
//   console.log("Key " + key + " has been pressed");
// }

// function keyReleased() {
//   console.log("Key " + key + " has been released");
// }

// keycode.info;

// function keyPressed() {
//   console.log("Key " + keyCode + " has been pressed");
// }

// function keyReleased() {
//   console.log("Key " + keyCode + " has been released");
// }

// function draw() {
//   if (keyIsDown(82)) {
//     background(255, 0, 0);
//   } else if (keyIsDown(71)) {
//     background(0, 255, 0);
//   } else if (keyIsDown(66)) {
//     background(0, 0, 255);
//   } else {
//     background(255, 255, 255);
//   }
// }

// let x = 200;
// let y = 200;
// let size = 50;
// let speed = 5;

// function draw() {
//   if (keyIsDown(37)) {
//     x -= speed;
//   } else if (keyIsDown(39)) {
//     x += speed;
//   } else if (keyIsDown(38)) {
//     y -= speed;
//   } else if (keyIsDown(40)) {
//     y += speed;
//   }

//   background(255, 255, 255);
//   ellipse(x, y, size);
// }

//12: EXAMPLE - MOVE A CAR WITH THE KEYBOARD
function car(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(128, 128, 0);
  rect(-50, -30, 100, 60, 10);
  fill(0, 0, 0);
  rect(10, -25, 15, 50, 5);
  pop();
}

let x = 100;
let y = 100;
let rotation = 0;
let speed = 100;

function draw() {
  background(255, 255, 255);
  car(x, y, rotation);

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }
  if (keyIsDown(37)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.05;
  }
}

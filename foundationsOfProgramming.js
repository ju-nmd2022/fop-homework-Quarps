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
function draw() {
  if (mouseX < 300) {
    background(255, 0, 130);
  } else if (mouseX < 500) {
    background(255, 255, 231);
  } else {
    background(0, 255, 231);
  }
}

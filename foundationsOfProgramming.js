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
// function car(x, y, rotation) {
//   push();
//   translate(x, y);
//   rotate(rotation);
//   fill(128, 128, 0);
//   rect(-50, -30, 100, 60, 10);
//   fill(0, 0, 0);
//   rect(10, -25, 15, 50, 5);
//   pop();
// }

// let x = 100;
// let y = 100;
// let rotation = 0;
// let speed = 100;

// function draw() {
//   background(255, 255, 255);
//   car(x, y, rotation);

//   x = x + Math.cos(rotation) * speed;
//   y = y + Math.sin(rotation) * speed;

//   if (keyIsDown(38)) {
//     speed = 5;
//   } else if (keyIsDown(40)) {
//     speed = -5;
//   } else {
//     speed = 0;
//   }
//   if (keyIsDown(37)) {
//     rotation = rotation - 0.05;
//   } else if (keyIsDown(39)) {
//     rotation = rotation + 0.05;
//   }
// }

//13 ROUNDING NUMBERS
// const randomNumber = Math.random() * 100;
// const roundedNumber = Math.floor(randomNumber);
// console.log(roundedNumber);

// const p5randomNumber = Math.floor(random(10, 50));
// console.log(p5randomNumber);

// 13 EXAMPLE RANDOM X Y COORDINATES OF A SHAPE
// function roundedRandom(min, max) {
//   let number = Math.random() * (max - min) + min;
//   number = Math.floor(number);
//   return number;
// }

// function mouseClicked() {
//   let x = roundedRandom(200, 300);
//   let y = roundedRandom(200, 600);

//   fill(255, 0, 0);
//   ellipse(x, y, x - 100);
// }

//14: WHILE LOOPS
// let count = 0;

// while (count <= 14) {
//   ellipse(30 + count * 50, 100, 40);
//   count += 1;
// }

//14: WHILE LOOPS EXERCISE - SQUARED PAPER
// background(255, 255, 255);
// let x = 0;
// let y = 0;
// const size = 80;

// while (x < width) {
//   line(x, 0, x, height);
//   x += size;
// }

// while (y < height) {
//   line(0, y, width, y);
//   x += size;
// }

//14: FOR LOOPS
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//14: FOR LOOPS EXERCISE - DRAW 5 RECTANGALES

// background(255, 255, 255);

// let size = 50;
// let margin = 50;
// let x = margin;

// for (let i = 0; i < 6; i++) {
//   const percentage = (i + 1) / (5 - 2);
//   rect(x, 100 - (size / 2) * percentage, size * percentage, size * percentage);
//   x = x + size * percentage + margin;
// }

//14: FOR LOOPS EXERCISE - DRAW A CHECKERBOARD - NESTED FOR LOOP
// const size = 70;
// const length = 10;

// background(125, 125, 125);
// // noStroke();

// for (let x = 0; x < length; x++) {
//   for (let y = 0; y < length; y++) {
//     if (y % 2 === 0) {
//       if (x % 2 === 0) {
//         fill(0, 0, 0);
//       } else {
//         fill(255, 255, 255);
//       }
//     } else {
//       if (x % 2 === 0) {
//         fill(255, 255, 255);
//       } else {
//         fill(0, 0, 0);
//       }
//     }
//     rect(x * size, y * size, size, size);
//   }
// }

//15: ARRAYS

//array[index] (a position in the list = index)
//array.length (counts the amount of objects in the list)
//arrray.indexOf("...") (generates the index of an object - position in the list)
//array.join("...") (lets all element join together on a single row, as a string)
//array.push("...") (adds the element to the end of the list, dont mix strings and numbers)
//array.pop("...") (removes an element, on the end of the list)

//array.unshift("...") (adds an element in the beginning)
//array.shift("...") (removes an element in the beginning)
//array.splice("position", "amount to remove", "add elements", "add elements", ...)

// let animals = ["d1og", "bnny", "cat", "monke", "lion"];

// console.log(animals);

// function draw() {
//   background(255, 255, 255);
//   text(animals.join(" "), 20, 100);
// }

// function mouseClicked() {
//   animals.push("added");
// }

//15: ARRAYS AND LOOPS

// let animals = ["🐶", "🐰", "🐱", "🐵", "🦁"];

// function draw() {
//   background(255, 255, 255);
//   textSize(60);
//   for (let index in animals) {
//     let animal = animals[index];
//     text(animal, 20, 70 + 70 * index);
//   }
// }

//ANOTHER WAY

// let animals = ["🐶", "🐰", "🐱", "🐵", "🦁"];

// function draw() {
//   background(255, 255, 255);
//   textSize(60);
//   let y = 70;
//   for (let animal of animals) {
//     text(animal, 20, y);
//     y += 70;
//   }
// }

//15: ARRAYS AND RETURN VALUES IN FUNCTIONS
// function randomElement(array) {
//   // let randomIndex = Math.random() * array.length;
//   // randomIndex = Math.floor(randomIndex);
//   // return array[randomIndex];

//   return array[Math.floor(Math.random() * array.length)];
// }

// const animals = ["🐶", "🐰", "🐱", "🐵", "🦁", "🐤"];

// function mouseClicked() {
//   background(255, 255, 255);
//   textSize(60);
//   const randomAnimal = randomElement(animals);
//   text(randomAnimal, 20, 100);
// }

//15: EXERCISE - REVERSE THE ORDER
// function reverse(array) {
//   let reversedArray = [];

//   for (let element of array) {
//     reversedArray.unshift(element);
//   }

//   return reversedArray;
// }
// const exampleArray = ["🐶", "🐰", "🐱", "🐵", "🦁", "🐤"];
// console.log(reverse(exampleArray));

//15: EXERCISE - RANDOMZIE

// function randomize(array) {
//   let randomizedArray = [];

//   while (array.length > 0) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     randomizedArray.push(array[randomIndex]);
//     array.splice(randomIndex, 1);
//   }
//   return randomizedArray;
// }

// const exampleArray = ["🐶", "🐰", "🐱", "🐵", "🦁", "🐤"];
// console.log(randomize(exampleArray));

// 15: EXERCISE - REMEMBER THE LAST 5 KEYS

// let lastKeys = [];

// function draw() {
//   background(255, 255, 255);
//   fill(0, 0, 0);
//   textSize(60);
//   text(lastKeys.join(", "), 40, 100);
// }

// function keyReleased() {
//   lastKeys.unshift(key);
//   if (lastKeys.length > 5) {
//     lastKeys.pop;
//   }
// }

//15: EXAMPLE - NIGHT SKY
// let starX = [];
// let starY = [];
// let starAlpha = [];

// for (let i = 0; i < 500; i++) {
//   const x = Math.floor(Math.random() * width);
//   const y = Math.floor(Math.random() * height);
//   const alpha = Math.random();

//   starX.push(x);
//   starY.push(y);
//   starAlpha.push(alpha);
// }

// function draw() {
//   noStroke();
//   background(0, 0, 0);

//   for (let index in starX) {
//     fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
//     ellipse(starX[index], starY[index], 3);
//     starAlpha[index] += 0.02;
//   }
// }

//16: SIMPLE OJBECTS
// let poistion = { x: 100, y: 100 };

// let user = {
//   name: "Ludwig",
//   role: "Student",
//   school: "Jönköping University",
// };

// console.log(user.school);

// function draw() {
//   ellipse(poistion.x, poistion.y, 40);
//   poistion.x += 1;
//   poistion.y += 2;
// }

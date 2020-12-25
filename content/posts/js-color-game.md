---
title: Getting started with Javascript
description: "Make a simple game using Javascript to learn the fundamentals of DOM manipulation and other tricks."
snippet: Learning Javascript and the basics by making a simple game
---

**Learning JavaScript By Making A Game.. The Colour Game!**

That's right the colour game. How this works is the user will have different colour choices to select from. The colour's `RGB` value will be displayed on the page and its the users job to select the correct colour based of their numeric value. The user will have 6 squares with different colours to choose from. Its the user's job to match the colour.

---

Here is how to get started; first create an `index.html` file in your code editor of choice. I recommend Visual Studio Code. Second we need to create a JavaScript file named `app.js` so we can code the logic for this game. You can name this whatever you want but for demonstration purposes I will be referring to this file as `app.js`. Third we need to style our page so we can create a `style.css` file. Now lets begin!

---

Copy and paste this code to get a simple boiler plate going for our page.

`HTML`

---

```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta author="quelchlax" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- custom style sheet -->
    <link rel="stylesheet" href="style.css" type="text/css" />
  </head>
  <body>
    <h1>
      what color is this
      <br />
      <span id="colorDisplay">RGB</span>
      <br />
      click the correct color
    </h1>

    <div id="stripe">
      <!-- these are the buttons we will be attaching some functions to later on -->
      <button id="reset">New Colors</button>
      <span id="message"></span>
      <button id="easyBtn">Easy</button>
      <button id="hardBtn" class="selected">Hard</button>
    </div>
    <div id="container">
      <!-- these are the squares that will host random colors -->
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>

    <!-- custom javascript file -->
    <script src="app.js" type="text/javascript"></script>
  </body>
</html>
```

---

Okay now we got the HTML out of the way. Lets style the page. Again simply copy and paste this. You can pick through it to see how the styling works if you please. It's pretty straight forward.

`CSS`

---

```css

body {
  background-color: #232323;
  margin: 0;
  font-family: "Avenir", "Montserrat" ;
}

.square {
  width: 30%;
  background: purple;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 25%;
  transition: 0.75s;
}

.square:hover {
  border-radius: 50%;
  transition: 0.25s;
}

#container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: white;
  line-height: 1.1;
  background: steelblue;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  padding: 20px 0;
}

#colorDisplay {
  font-size: 200%;
}

#message {
  text-align: center;
  color: rgb(4, 0, 255);
  display: inline-block;
  width: 20%;
}

#stripe {
  height: 30px;
  text-align: center;
  background: white;
  color: black;
}

.selected {
  background: steelblue;
  color: white;
}

button {
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 700;
  color: steelblue;
  height: 100%;
  letter-spacing: 1px;
  transition: all 0.75s;
}

button:hover {
  color: white;
  background: purple;
}

```

---

You can play around with this code a bit and pick which colours you prefer. Try not to mess with the sizing too much as this might cause some odd effects to the page. I recommend not changing the background colour of this page because it will throw off some logic in our JavaScript code later on.

---

Now for the fun parts. The JavaScript code! I will break down each part of the code the best I can, and then display all of the code at the end of this guide.

---

To start we need to target various elements inside the HTML file so we can mutate some values and listen on changes later. We can start this by assigning some variables to target various parts of our webpage.

---

```javascript
var numberOfSquares = 6;

var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");

var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
```

---

Here we did a couple things. We first initialized how many squares we have with `var numberOfSquares = 6`.

After that we are assigning some variables to various document objects on the page. This can be done a few different ways. Above they're a few ways to do this with `querySelectorAll, querySelector, getElementById, getElementByClassName` ect.

The last three variables will make more sense as we go as they use functions to assign data to them.

---

The next bit might seem daunting to newer developers learning JavaScript. But I will try my best to walk through this for loop to make some sense of what is happening here.

---

```javascript
for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listener to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked square
    clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "You got it!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Keep Trying!";
    }
  });
}
```

---

What this loop is doing is we are iterating through how many squares are on the webpage. `var squares = document.querySelectorAll(".square");`

Basically will return a value based on how many objects are currently within the `square` section inside our HTML file.

If you look back to our HTML file you will noticed we assigned 6 squares named `.square` as a class name. So the `squares.length` value should be 6. So this for loop for each square inside our HTML file will be assigned a random colour using a function I will show you below.

---

```javascript
squares[i].addEventListener("click", function() {
  // grab color of clicked square
  clickedColor = this.style.backgroundColor;
  // compare color to picked color
  if (clickedColor === pickedColor) {
    messageDisplay.textContent = "You got it!";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
    resetButton.textContent = "Play Again?";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Keep Trying!";
  }
});
```

---

This specific event listener will run if a `.square` div is clicked upon. This will check to see if the selected colour is correct or not, then remove them if its incorrect. If the background colour for some reason happens to get selected as a random colour it will dismiss this. That is what the else statement is about.

---

Next we will be adding event listeners to each button. Each buttons effect changes how the game is played. The easy button will only display 3 squares to select, with the hard button showing all 6 squares.

Lets start with the easy button's event listener.

---

```javascript
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  resetHeader();
  getColors();
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
```

---

What this is doing is assigning a event listener to the button inside the webpage. If this button is selected it will remove the hard button selected from the class list with `hardBtn.classList.remove("selected")`.

Since we are clicking on the "Easy Mode" we need to make sure easy button class list is added. We do this with the `easyBtn.classList.add("selected");` line of code.

We now will assigned 3 squares instead of 6 and call two functions to clean up our webpage. This functions will be listed below. The for loop is similar to what we did above with the above code.

---

Now for the hard button

---

```javascript
hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numberOfSquares = 6;
  resetHeader();
  getColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
```

The hard button or 'Hard Mode' is somewhat similar with what the easy button does. So I will skip explaining in detail exactly what is happening here.

Now we need to create an event listener for the reset button we created in the web page.

---

```javascript
resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colors";
  getColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  resetHeader();
});
```

---

What is happening here is when the reset button is clicked it will run a function. Just like what we did with the other event listeners above. It is somewhat similar to the other for loops are doing. It will cycle through each square section in the HTML and reassign a colour value to it.

Now lets move onto some of the functions that are being used in this code. After seeing some of this it might make a bit more sense.

The function to get the colours looks like this.

---

```javascript
function getColors() {
  // generate new colors
  colors = generateRandomColors(numberOfSquares);
  // pick new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
}
```

---

This function is calling another function to generate some random colors. This function looks like this:

---

```javascript
function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add number random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
```

---

What this function does is creates an empty array and depending on the integer being passed to the function it will push a new colour to the empty array then return the array. So since the array sizes are 3 or 6 (Because of how many squares are currently present) it will assign a new colour to the square.

Some other helper functions that make this application what is is are:

---

```javascript
function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function resetHeader() {
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
```

These functions change the colour, reset the header inside the webpage and picks a new colour. Play around with the code to see what is happening.

Lastly the function that actually selects a random colour and makes all of this work.

---

```javascript
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; // pay attention to spacing here
}
```

---

This function is somewhat odd. What we are doing is making 3 variables and getting a random value for that variable between 0-255. Depending on which value is selected it will then be used by another function to push that colour to a square.

---

If we piece all of this together you should have something that looks like this

---

```js
// Variables
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Page Startup
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listener to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked square
    clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "You got it!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Keep Trying!";
    }
  });
}

// Event Listeners
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  resetHeader();
  getColors();
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numberOfSquares = 6;
  resetHeader();
  getColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colors";
  getColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  resetHeader();
});

// Functions
function getColors() {
  // generate new colors
  colors = generateRandomColors(numberOfSquares);
  // pick new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
}

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function resetHeader() {
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add number random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; // pay attention to spacing here
}
```

---

If you wish copy and paste all of this... Check out how it works. I made this when I first started out developing and I found it helped me.

I seen this code lying around from an old folder I had when I first started college.

I will note: I apologize for my lack of explanations into the code itself. Sometimes its best to learn by diving head first and playing around yourself. Here is a small foundation to get someone going. Cheers!

#### Written By Eric Quelch

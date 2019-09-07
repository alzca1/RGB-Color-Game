"use strict";
var numSquares = 6; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headingParagraph = document.querySelector("h1");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3; 
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }  
  }
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6; 
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor(); 
  colorDisplay.textContent = pickedColor; 

  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }  
  }
);

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
      resetButton.textContent = "Play again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  headingParagraph.style.backgroundColor = color;
}

function generateRandomColors(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
} 

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colors";
  //generate all colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked Color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  headingParagraph.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";

  // // setSquaresBackground();
  // function setSquaresBackground (){
  //     for (var i = 0; i < squares.length; i++){
  //       squares[i].style.backgroundColor = colors[i];
  // }
  // };
});

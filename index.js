// Player1 dice
var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomDice1 = "images/dice"+randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src",randomDice1);

// Player2 dice
var randomNumber2 = Math.floor(Math.random()*6 +1);
var randomDice2 = "images/dice"+randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",randomDice2);

// Header
if (randomNumber2>randomNumber1) {
  var header = "Player 2 Wins! 🚩"
}
else if (randomNumber1>randomNumber2) {
  header = " 🚩 Player 1 Wins!"
}
else if (randomNumber1=randomNumber2) {
  header = "Draw!"
}
document.querySelector("h1").textContent = header;

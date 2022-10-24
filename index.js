// get a random number from 1-6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2)

// change the <img> tag's src to a random dice

var diceImageSource1 = "images/dice" + randomNumber1 + ".png";
var diceImageSource2 = "images/dice" + randomNumber2 + ".png";

console.log(diceImageSource1);
console.log(diceImageSource2);

document.querySelector("img.img1").setAttribute("src", diceImageSource1);
document.querySelector("img.img2").setAttribute("src", diceImageSource2);

// Change the h1 to display the winner(s)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}

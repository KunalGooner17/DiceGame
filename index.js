
var randomNumber1 = 1+Math.round(5*Math.random());
var randomNumber2 = 1+Math.round(5*Math.random());

var Number1ImageSource = "images/dice"+randomNumber1+".png";
var Number2ImageSource = "images/dice"+randomNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src", Number1ImageSource);
document.querySelectorAll("img")[1].setAttribute("src", Number2ImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins";
}

if (randomNumber1 === randomNumber2)
{
  document.querySelector("h1").textContent = "Draw";
}

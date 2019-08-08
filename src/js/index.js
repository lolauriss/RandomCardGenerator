import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let numberRandom = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "J",
    "Q",
    "K"
  ];
  let symbolRandom = ["&spades;", "&hearts;", "&diams;", "&clubs;"];

  let random = Math.floor(Math.random() * 4);
  if (random == 1 || random == 2) {
    document.getElementsByClassName("up")[0].style.color = "red";
    document.getElementsByClassName("down")[1].style.color = "red";
  }

  document.getElementsByClassName("up")[0].innerHTML = symbolRandom[random];
  document.getElementsByClassName("up")[1].innerHTML = symbolRandom[random];

  document.getElementsByClassName("number")[0].innerHTML =
    numberRandom[Math.floor(Math.random() * 13)];
};

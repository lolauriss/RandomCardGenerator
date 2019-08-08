/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const nameGenerator = (arr1, arr2, arr3) => {
    let nameDomain = "";

    for (let i in arr1) {
      for (let j in arr2) {
        for (let k in arr3) {
          nameDomain += arr1[i] + arr2[j] + arr3[k] + ".com \n";
        }
      }
    }
    return nameDomain;
  };

  document
    .getElementsByTagName("button")
    .addEventListener("click", nameGenerator);
};

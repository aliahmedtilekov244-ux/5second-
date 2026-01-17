
let btn = document.getElementById("btn");
let textDiv = document.getElementById("text");

btn.onclick = function () {
  textDiv.innerHTML = "Салам! Бул текст 5 секунддан кийин өчөт.";

  setTimeout(function () {
    textDiv.innerHTML = "";
  }, 5000);
};
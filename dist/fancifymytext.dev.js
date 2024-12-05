"use strict";

function makeTextBigger() {
  var textArea = document.getElementById("text-area");
  textArea.style.fontSize = "24pt";
}

function toggleFancify() {
  var textArea = document.getElementById("text-area");
  var fancy = document.getElementById("fancy-radio").checked;

  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function addMoo() {
  var textArea = document.getElementById("text-area");
  var text = textArea.value.toUpperCase();
  var sentences = text.split(".");
  text = sentences.map(function (sentence) {
    return sentence.trim() ? sentence + "-Moo" : "";
  }).join(". ");
  textArea.value = text.trim();
}

document.getElementById("bigger-button").onclick = makeTextBigger;
document.getElementById("fancy-radio").onchange = toggleFancify;
document.getElementById("boring-radio").onchange = toggleFancify;
document.getElementById("moo-button").onclick = addMoo;
//# sourceMappingURL=fancifymytext.dev.js.map

function makeTextBigger() {
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = "24pt";
}

function toggleFancify() {
    const textArea = document.getElementById("text-area");
    const fancy = document.getElementById("fancy-radio").checked;

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
    const textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim() ? sentence + "-Moo" : "")
        .join(". ");
    textArea.value = text.trim();
}

document.getElementById("bigger-button").onclick = makeTextBigger;
document.getElementById("fancy-radio").onchange = toggleFancify;
document.getElementById("boring-radio").onchange = toggleFancify;
document.getElementById("moo-button").onclick = addMoo;

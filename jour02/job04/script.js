var textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    var letter = event.key;
    if (letter.match(/[a-z]/) && event.target.id !== "keylogger"){
        textarea.value += letter;
    } else if (event.target.id !== "keylogger") {
        textarea.value += letter;
    }
});

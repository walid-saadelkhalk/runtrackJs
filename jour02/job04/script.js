var textarea = document.getElementById("keylogger");
var tempInput = ''; 

function handleKeyDown(event) {
    var key = event.key;

    if (event.target === textarea) {
        if (key === "Backspace") {
            textarea.value = textarea.value.slice(0, -1);
        } else {
            tempInput += key;
        }
    } else {
        if (key !== "Backspace") {
            textarea.value += key;
        }
    }
}

function handleKeyUp(event) {
    if (event.target === textarea) {
        textarea.value += tempInput ;
        tempInput = '';
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("mouseenter", function(event) {
    var key = event.key;
    if (event.target.tagName.toLowerCase() === "body") {
        textarea.value += key;
    }
});
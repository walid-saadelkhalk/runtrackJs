// Code Konami
var konamiCode = ['ArrowUp', ,'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            applyKonamiStyle();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function applyKonamiStyle() {
    document.body.style.backgroundColor = "#0062ff";
}

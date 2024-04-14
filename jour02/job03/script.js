var compteur = 0;

function addOne() {
    compteur++;
    document.getElementById("compteur").innerHTML = compteur;
}
document.getElementById("button").addEventListener("click", addOne);
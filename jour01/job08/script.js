function nombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (nombrePremier(nombre1) && nombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

var resultat = sommeNombresPremiers(13, 23);
console.log(resultat); 

resultat = sommeNombresPremiers(12, 24);
console.log(resultat); 

resultat = sommeNombresPremiers(13, 24);
console.log(resultat);

resultat = sommeNombresPremiers(12, 23);
console.log(resultat);

resultat = sommeNombresPremiers(29, 37);
console.log(resultat);

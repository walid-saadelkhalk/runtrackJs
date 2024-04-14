function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2020));
console.log(bisextile(2021));
console.log(bisextile(2022));
console.log(bisextile(2023));
console.log(bisextile(2024));
console.log(bisextile(2025));

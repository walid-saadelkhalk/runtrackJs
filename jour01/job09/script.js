function tri(numbers, order) {

    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;

        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        return "Erreur : L'ordre doit être 'asc' ou 'desc'.";
    }

    return numbers;
}

var tab = [4, 3, 5, 8, 9, 1, 2, 7, 6];
console.log(tri(tab, "asc"));
console.log(tri(tab, "desc"));

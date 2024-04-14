function showhide() {
    var article = document.getElementById("article");

    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}

document.getElementById("button").addEventListener("click", function() {
    var article = document.getElementById("article");

    if (!article) {
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        article.id = "article";
        document.body.appendChild(article);
    }

    showhide();
});

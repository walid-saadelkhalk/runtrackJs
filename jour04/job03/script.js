document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filter");
    const pokemonListDiv = document.getElementById("pokemonList");
    const filterButton = document.getElementById("filterButton");

    filterButton.addEventListener("click", async () => {
        const { id, nom, type } = getFilterValues(filterForm);
        try {
            const data = await fetch("pokemon.json").then(response => response.json());
            displayPokemon(filterPokemon(data, id, nom, type));
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    });

    const getFilterValues = form => ({
        id: form.elements["id"].value.toLowerCase(),
        nom: form.elements["nom"].value.toLowerCase(),
        type: form.elements["type"].value.toLowerCase()
    });

    const filterPokemon = (pokemonData, id, nom, type) => pokemonData.filter(pokemon =>
        (id === "" || pokemon.id.toString().toLowerCase().includes(id)) &&
        (nom === "" || pokemon.name.english.toLowerCase().includes(nom)) &&
        (type === "" || pokemon.type.some(t => t.toLowerCase() === type))
    );

    const displayPokemon = pokemonArray => {
        pokemonListDiv.innerHTML = pokemonArray.length === 0 ?
            "Aucun Pokémon ne correspond aux critères de recherche." :
            pokemonArray.map(pokemon =>
                `<li>${pokemon.id} - ${pokemon.name.english} (${pokemon.type.join(", ")})</li>`
            ).join("");
    };
});

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => res.json())
    .then(data => {
        console.log("URL del sprite front_default de Charizard:");
        console.log(data.sprites.front_default);
    })
    .catch(err => console.log("Error:", err));

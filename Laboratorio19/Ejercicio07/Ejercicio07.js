fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(res => res.json())
    .then(data => {
        console.log("Lista de pokemones")
        data.results.forEach(poke => {
            console.log(poke.name)
        });
    })
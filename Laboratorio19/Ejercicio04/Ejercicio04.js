fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
        console.log(`Nombre del pokemon :` ,data.name);
        console.log(`Altura del pokemon: `,(data.height*0.1).toFixed(2))
        console.log(`Peso del pokemon: `,data.weight)
    })
    
    .catch(err => console.log("Error: ",err))
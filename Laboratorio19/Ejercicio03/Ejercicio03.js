const ID = prompt("Ingrese la ID del pokemon:");

fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    .then(res => res.json())
    .then(data => console.log(`Nombre del pokemon ${ID}:` ,data.name))
    .catch(err => console.log("Error: ",err))
const generar = Math.floor(Math.random()*(898+1))

fetch(`https://pokeapi.co/api/v2/pokemon/${generar}`)
    .then(res => res.json())
    .then(data => {
        console.log(`El pokemon de ID: ${generar} , es `,data.name);
    })
    .catch(err => console.log("Error: ",err))

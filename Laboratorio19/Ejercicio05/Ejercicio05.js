async function infoPokemon (nombre) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
    
    if(!res.ok) {
        throw new Error (`Pokemon ${nombre} no encontrado `);
    }
    const data = await res.json();
        console.log(`Nombre del pokemon :` ,data.name);
        console.log(`Altura del pokemon: `,(data.height*0.1).toFixed(2));
        console.log(`Peso del pokemon: `,data.weight);
    }
    catch(error) {
        console.log("Error: ",error.message)
    }
}

const nom = prompt("Ingrese el nombre del pokemon");
infoPokemon(nom);
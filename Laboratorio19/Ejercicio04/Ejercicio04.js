async function cargarUsuario() {
    try {
        const responde = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await responde.json();
        console.log("Nombre: ", data.name);
        console.log("Email: ", data.email);
        console.log("Username: ", data.username);
    } catch (error) {
        console.error("Error: ", error);
    }
}
cargarUsuario();
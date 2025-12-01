async function cargarUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        usuarios.forEach(user => {
            console.log("Nombre: ", user.name);
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}
cargarUsuario();
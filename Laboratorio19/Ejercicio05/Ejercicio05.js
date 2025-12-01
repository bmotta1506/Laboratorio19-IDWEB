function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usuario => {
            usuario.forEach(user => {
                console.log("Nombre: ", user.name);
            }
        )})
    .catch(error => console.error("Error: ", error));
}
cargarUsuario();
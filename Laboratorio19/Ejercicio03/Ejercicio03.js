function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("Nombre: ", data.name),
            console.log("Email: ", data.email),
            console.log("Username: ", data.username)
        })
    .catch(error => console.error("Error: ", error));
}
cargarUsuario();
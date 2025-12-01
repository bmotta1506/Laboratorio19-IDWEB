document.getElementById("boton").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(user => {
            document.getElementById("nombre").innerText = "Nombre: " + user.name;
            document.getElementById("email").innerText = "Email: " + user.email;
            document.getElementById("ciudad").innerText = "Ciudad: " + user.address.city;
        })
        .catch(error => console.error("Error: ", error));
});
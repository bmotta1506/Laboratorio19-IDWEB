document.getElementById("boton").addEventListener("click", function() {
    async function ejercicio() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            document.getElementById("nombre").innerText = "Nombre: " + user.name;
            document.getElementById("email").innerText = "Email: " + user.email;
            document.getElementById("ciudad").innerText = "Ciudad: " + user.address.city;
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    ejercicio();
});
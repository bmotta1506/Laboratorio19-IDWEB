boton.onclick = function() {
    let texto = entrada.value;
    salida.textContent = texto.replace(/<[^>]*>/g, "");
}
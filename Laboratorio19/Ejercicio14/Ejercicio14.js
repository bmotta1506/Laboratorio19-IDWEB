btn.onclick = function() {
    let f = fecha.value;
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (regex.test(f)) {
        resultado.textContent = "Formato válido";
    } else {
        resultado.textContent = "Formato inválido";
    }
};
btn.onclick = function() {
    let t = texto.value;
    let partes = t.split(/[.!?]/);
    partes = partes.filter(p => p.trim() !== "");

    resultado.textContent = JSON.stringify(partes);
};

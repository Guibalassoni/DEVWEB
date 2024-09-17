function calcularMedia() {
    // Obtém os valores de todos os inputs e valida
    const ac1 = parseFloat(document.getElementById('ac1').value);
    const ac2 = parseFloat(document.getElementById('ac2').value);
    const ag = parseFloat(document.getElementById('ag').value);
    const af = parseFloat(document.getElementById('af').value);

    // Verifica se todas as notas estão entre 0 e 10
    if (ac1 < 0 || ac1 > 10 || ac2 < 0 || ac2 > 10 || ag < 0 || ag > 10 || af < 0 || af > 10) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    // Calcula a média
    const media = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    if (media >= 5) {
        resultado.textContent = "Aprovado! Sua média é: " + media.toFixed(2);
    } else {
        resultado.textContent = "Reprovado. Sua média é: " + media.toFixed(2);
    }
}
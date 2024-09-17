const form = document.getElementById('seguroForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const valorAutomovel = parseFloat(document.getElementById('valorAutomovel').value);

    let valorApolice;

    if (sexo === 'masculino' && idade <= 25) {
        valorApolice = valorAutomovel * 0.15;
    } else if (sexo === 'masculino' && idade > 25) {
        valorApolice = valorAutomovel * 0.10;
    } else {
        valorApolice = valorAutomovel * 0.08;
    }

    resultado.textContent = `O valor da apólice para ${nome} é R$ ${valorApolice.toFixed(2)}`;
});
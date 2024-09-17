const form = document.getElementById('clienteForm');
const clientesList = document.getElementById('clientesList');
const clientes = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    const cliente = { nome, email, idade };
    clientes.push(cliente);

    clientesList.innerHTML = '';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = cliente.nome;
        clientesList.appendChild(li);
    });

    form.reset();
});
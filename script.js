document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário até a validação

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");
        // Aqui, normalmente, você enviaria os dados do formulário para um servidor ou e-mail
        // Para fins deste exemplo, apenas limpamos os campos.
        document.getElementById('form-contato').reset();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Captura o formulário e a tabela
    const formulario = document.getElementById("formulario-agenda");
    const tabela = document.querySelector("table");
    const corpoTabela = tabela.querySelector("tbody"); // Seleciona o corpo da tabela

    // Evento para capturar o envio do formulário
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário (não recarregar a página)

        // Captura os valores dos campos de entrada
        const nomeContato = document.getElementById("input-nome-contato").value;
        const numeroContato = document.getElementById("input-numero-contato").value;

        // Verifica se ambos os campos estão preenchidos
        if (!nomeContato || !numeroContato) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Cria uma nova linha (<tr>) para a tabela
        const novaLinha = document.createElement("tr");

        // Cria as células (<td>) para o nome e número de telefone
        const celulaNome = document.createElement("td");
        celulaNome.textContent = nomeContato; // Insere o nome na célula

        const celulaNumero = document.createElement("td");
        celulaNumero.textContent = numeroContato; // Insere o telefone na célula

        // Adiciona as células à nova linha
        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaNumero);

        // Adiciona a nova linha ao corpo da tabela
        corpoTabela.appendChild(novaLinha);

        // Limpa os campos do formulário
        formulario.reset();
    });
});
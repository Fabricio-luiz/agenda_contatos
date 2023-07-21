const form = document.getElementById("form-agenda");
const imgCelular = '<img src="./imagens/celular.png" alt="telefone_celular"/>';
const imgResidencial = '<img src="./imagens/residencial.png" alt="telefone_residencial"/>';
const nome = [];
const numero = [];
const img = document.getElementById("tipo");

let linhas = " ";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    somaTotalNumero();
    somaTotalTelefones();
});

function adicionaLinha() {
    const inputNomeCadastrado = document.getElementById("nome-cadastro");
    const inputTelefoneCadastrado = document.getElementById("telefone");
    const inputTipo = document.getElementById("tipo");

    if (numero.includes(inputTelefoneCadastrado.value)) {
        alert(`O Nome ${inputTelefoneCadastrado.value} já foi cadastrado`);
    } else {
        nome.push(inputNomeCadastrado.value);
        numero.push(inputTelefoneCadastrado.value);
    
        let linha = "<tr>";
        linha += `<td>${inputNomeCadastrado.value}</td>`;
        linha += `<td>${inputTelefoneCadastrado.value}</td>`;
        linha += `<td>${img.value == "Celular" ? imgCelular : imgResidencial} </td>`;
    
        linha += "</tr>";
    
        linhas += linha;
    }

    inputNomeCadastrado.value = "";
    inputTelefoneCadastrado.value = "";
    inputTipo.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function somaTotalNumero() {
    const numerofinal = somaTotalTelefones();
    document.getElementById("total").innerHTML = numerofinal;
}

function somaTotalTelefones() {
    let somaNumero = 0;
    for (let i = 0; i < numero.length; i++) somaNumero += numero[i];
    const total = numero.length;
    return numero.length;
}
let form = document.getElementById('formulario');
let mensagem = document.getElementById('mensagem');
let lista = document.getElementById('lista');

let doadores = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagem.innerHTML = "";

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let idade = parseInt(document.getElementById('idade').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let tipo = document.getElementById('tipoSanguineo').value;
    let telefone = document.getElementById('telefone').value.trim();
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('estado').value.trim();

    
    if (!nome.includes(" ")) {
        mensagem.innerHTML = "Digite nome e sobrenome";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "Email inválido";
        return;
    }

    if (idade < 16) {
        mensagem.innerHTML = "Idade mínima é 16 anos";
        return;
    }

    if (peso < 50) {
        mensagem.innerHTML = "Peso mínimo é 50kg";
        return;
    }

    if (tipo === "") {
        mensagem.innerHTML = "Selecione o tipo sanguíneo";
        return;
    }

    if (!/^[0-9]+$/.test(telefone)) {
        mensagem.innerHTML = "Telefone deve conter apenas números";
        return;
    }


    let doador = {
        nome,
        email,
        idade,
        peso,
        tipoSanguineo: tipo,
        telefone,
        cidade,
        estado
    };

    
    doadores.push(doador);

    console.log(doadores);

   
    lista.innerHTML += `
        <p>${nome} - ${tipo}</p>
    `;

    form.reset();
});
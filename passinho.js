var code = document.getElementById('code');
var decode = document.getElementById('decode');
var botao = document.getElementById('botaoComecar');

function mudaBotao () {
    if (decode.checked) {
        botao.innerText = "Decodificar!";
    } else if (code.checked) {
        botao.innerText = "Codificar!";
    }
}

var cesar = document.getElementById('cesar');
var base64 = document.getElementById('base64');
var incremento = document.getElementById('incremento');

function mostraInc() { 
    incremento.style.display = "block"; 
}

function escondeInc() {
    incremento.style.display = "none";
}

cesar.addEventListener('change', mostraInc);
base64.addEventListener('change', escondeInc)

var resultado = document.querySelector('p');
var inc = parseInt(document.getElementById('increment').value);
console.log(inc);
console.log(typeof inc);

botao.addEventListener('click', function(event) {
    event.preventDefault();
    checaOpcao();
});

function codeCesar(msg) {
    msg = msg.split("");
    console.log(msg);
    let indexAtual = msg.map((x) => x.charCodeAt());
    console.log(indexAtual);
    let indexNovo = indexAtual.map((x) => x+inc);
    console.log(indexNovo);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}

function decodeCesar(msg) {
    msg = msg.split("");
    let indexAtual = msg.map((x) => x.charCodeAt())
    let indexNovo = indexAtual.map((x) => x-inc);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}

function checaOpcao () {
    var msg = document.getElementById('mensagem').value;
    console.log(msg);

    if (code.checked) {
        if (cesar.checked) {
            console.log("Codificar César")
            resultado.innerText = codeCesar(msg);
        } else {
            console.log("Codificar base64")
            resultado.innerText = btoa(msg);
        } 
    } else if (decode.checked) {
        if (cesar.checked) {
            console.log("Decodificar César")
            resultado.innerText = decodeCesar(msg);
        } else {
            console.log("Decodificar base64")
            resultado.innerText = atob(msg);
        } 
    } else {
        resultado.innerText = "Escolha um procedimento válido.";
    }
}

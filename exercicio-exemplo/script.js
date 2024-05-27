document.getElementById('mostrar-variaveis').addEventListener('click',function() { //função principal

//variáveis simples
let idade = 25;
let nome = "Ana";
let casado = true;

document.getElementById('variavel-simples').innerText = `simples: Nome: ${nome}, idade: ${idade}, casado: ${casado}`;

//variáveis compostas
let frutas = ["maçã", "banana", "laranja"];
let pessoa = {
nome: "carlos",
idade: 30,
casado: false
};

document.getElementById('variavel-composta').innerText = `compostas: frutas ${frutas.join(', ')}, pessoa: nome: ${pessoa.nome}, idade: ${pessoa.idade}, casado: ${pessoa.casado}`;

//variáveis de variáveis
let a = 10;
let b = 20;
let c = 30;

let variaveis = [a, b, c];
let chave = "dinamica";
let objetoDinamico = {
dinamica: "este é um valor dinâmico"
};

document.getElementById('variavel-de-variaveis').innerText = `variáveis de variáveis: array: ${variaveis.join(', ')}, objeto dinâmico: ${objetoDinamico[chave]}`;
});

//exercício: adicionar frutas ao array
let frutasarray = ["maçã", "banana", "laranja"];

document.getElementById('form-frutas').addEventListener('submit', function(event) {
event.preventDefault();

let novafruta = document.getElementById('nova-fruta').value;
frutasarray.push(novafruta);
document.getElementById('lista-frutas').innerText = `lista de frutas: ${frutasarray.join(', ')}`;
document.getElementById('nova-fruta').value = '';
});





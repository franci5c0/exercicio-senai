//CALCULADORA

function calcular(operacao) {
let n1 = parseFloat(document.getElementById('numero1').value);
let n2 = parseFloat(document.getElementById('numero2').value);

if (operacao === '+'){ // === define igualdade
resultado = n1 + n2;
}

    else if (operacao === '-'){
       resultado = n1 - n2;
    }

else if (operacao === '*'){
resultado = n1 * n2
}

else if (operacao === '/'){
if (resultado === 0) {
resultado = 'divisão por zero'
} 
else {
resultado = n1 / n2;
}
}

document.getElementById('resultado').innerText = `resultado: ${resultado}`;
}


//GERADOR DE NÚMERO ALEATÓRIO

function gerar(){

    let numero = Math.floor(Math.random() *100);
    
    document.getElementById('numero-gerado').innerText = `O número gerado é: ${numero}`;
    
    }


//EXERCICIO PRÁTICO

    
    //exercício: adicionar frutas ao array
    let frutasarray = [""];
    
    document.getElementById('form-frutas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let novafruta = document.getElementById('nova-fruta').value;
    frutasarray.push(novafruta);
    document.getElementById('lista-frutas').innerText = `lista de frutas: ${frutasarray.join('')}`;
    document.getElementById('nova-fruta').value = '';
    });
    
    
    //CONTADOR DE CLICKS

const botao = document.getElementById('botao');

const contadorInput = document.getElementById('contador');

let contador = 0;

botao.addEventListener('click', function() {

contador++

contadorInput.value = contador;

});





    
    
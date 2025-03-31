// Solicita um nome ao usuário
var nome = prompt("Digite seu nome:");

// Exibe uma saudação no console
console.log("Olá, " + nome + "!");

// Solicita um número ao usuário
var numero1 = prompt("Digite um número:");
numero1 = parseFloat(numero1); // Converte para número

// Define um segundo número fixo para soma (poderia ser solicitado também)
var numero2 = 10;

// Realiza a soma e exibe no console
var soma = numero1 + numero2;
console.log("A soma de " + numero1 + " e " + numero2 + " é: " + soma);

// Solicita outro texto e o concatena ao nome
var outroTexto = prompt("Digite um texto:");
var resultadoConcatenacao = nome + " " + outroTexto;

// Exibe o resultado concatenado em um alerta
alert("Texto concatenado: " + resultadoConcatenacao);

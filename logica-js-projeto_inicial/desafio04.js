console.log('Bem-vindo(a)!');

let nome = 'Z Odie';

console.log('Olá, '+ nome+'!');

alert(`Olá, ${nome} !`);

let suaLinguagemDeProgramacao = prompt('Qual é a sua linguagem de programação preferida?');
console.log(suaLinguagemDeProgramacao);

let valor1 = 4;
let valor2 = 3;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

valor1 = 3;
valor2 = 10;
let subtracao = valor1 - valor2;

if(subtracao < 0){
    subtracao = subtracao * -1;
}
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${subtracao}`);//diferença é absoluta.

let suaIdade = prompt('Digite sua idade:');

if(suaIdade >= 18){
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade!');
}

numero = prompt('Digite um número:');
if(numero > 0){
    console.log('Positivo');
}else if(numero < 0){
    console.log('Negativo');
}else{
    console.log('Zero');
}

let numero = 1;
while(numero < 11){
    console.log(numero);
    numero++;
}

let nota = 8;
if(nota >= 7){
    console.log('Aprovado!');
}else{
    console.log('Reprovado!');
}

console.log(Math.random());


let numeroPseudoAleatorio = parseInt(Math.random() * 10) + 1; 
console.log(numeroPseudoAleatorio);

numeroPseudoAleatorio = parseInt(Math.random() * 1000) + 1; 
console.log(numeroPseudoAleatorio);

alert('"Se você está sempre tentando ser normal, nunca saberá o quão incrível você pode ser." (Maya Angelou)');
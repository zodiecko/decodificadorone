// Template String
let crase = 'Crase'
alert(`Eu estou entre dois sinais graves! Um sinal gravíssimo que sinaliza a ${crase}.`);

let diaDaSemana = prompt('Que dia da semana é hoje?');
console.log('O dia escolhido foi '+ diaDaSemana);

if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
    alert('Bom fim de semana!');
}else{
    alert('Boa Semana!');
}

let numeroInteiro = prompt('Digite um número inteiro:');

if(numeroInteiro > 0){
    alert('O número é positivo!');
}else if(numeroInteiro < 0){
    alert('O número é negativo!');
}else{
    alert('Zero é neutro!');
}

//Pontuação

let pontuacaoDoJogador = 3;

if(pontuacaoDoJogador >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente até ganhar.');
}

let saldoDaConta = 100;
alert(`Seu saldo é de : R$ ${saldoDaConta}`);

let nomeDaPessoa = prompt('Por favor, digite seu nome: ');
alert(`Seja bem-vindo(a) ao mundo fantástico da programação, ${nomeDaPessoa}!`);
console.log('Pegue seu banco de dados e sente para ver mais uma aula.')
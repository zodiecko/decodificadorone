let horaDoDesafio = document.querySelector('h1');
horaDoDesafio.innerHTML = 'Hora do Desafio';


function clicarBotaoConsole(){
    console.log('O botão "Console" foi clicado!');
}

function clicarBotaoAlert(){
    alert('Estou estudando JS!');
}

function clicarBotaoPrompt(){
    let cidadeBrasileira = prompt('Digite o nome de uma cidade brasileira:');
    alert(`Visitei a cidade ${cidadeBrasileira} e lembrei de você.`);
}

function clicarBotaoSoma(){
    let numero1 = prompt('Digite um número:');
    let numero2  = prompt('Digite outro número:');
    let soma = parseInt(numero1) + parseInt(numero2);
    
    alert(`A soma de ${numero1} com ${numero2} é ${soma}`);
}
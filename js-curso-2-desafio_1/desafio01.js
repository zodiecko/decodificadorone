function olaMundo() {
    console.log('Olá, mundo!');
}

function seuNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobro(numero) {
    let numberInt = parseInt(numero);
    numberInt = numberInt * 2;
    console.log(numberInt);
}

function mediaDeTres(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3;
    console.log(media);
}

function maiorDeDois(numero1, numero2) {
    let maior = numero1 >= numero2 ? numero1 : numero2;
    console.log(maior);
}

function quadradoDeX(numeroX) {
    let quadrado = numeroX * numeroX;
    console.log(quadrado);
}
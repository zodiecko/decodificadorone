function modoInicial(){
    naoMostrarCampo('botao-copiar');
    limparCampoTexto('texto-final');//precisa mesmo?
    mostrarElemento('pessoa-com-lupa');
    mostrarElemento('nenhuma-mensagem');
    mostrarElemento('digitar-texto');

}

function limparCampoTexto(elementoID){
    document.getElementById(elementoID).innerHTML = '';
}

function naoMostrarCampo(elementoID){
    document.getElementById(elementoID).style.display = 'none';
}

function mostrarElemento(elementoID){
    document.getElementById(elementoID).style.display = '';
}

function limparImagemETexto(){    
    naoMostrarCampo('nenhuma-mensagem');    
    naoMostrarCampo('pessoa-com-lupa');
    naoMostrarCampo('digitar-texto');
}

function margemTextoFinal(){
    document.getElementById('texto-final').style.margin = "10% 10% auto 10%";
}

function copiarParaAreaDeTransferencia() {
    var copyText = document.getElementById("texto-final").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert('Texto copiado com sucesso!');
}
// É só usar replaceAll
function trocarCaractere(caractere){
    switch (caractere) {
        case 'a':            
            return 'ai';            
        case 'e':            
            return 'enter';        
        case 'i':            
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        case 'ai':            
            return 'a';            
        case 'enter':            
            return 'e';        
        case 'imes':            
            return 'i';
        case 'ober':
            return 'o';
        case 'ufat':
            return 'u';
        default:
            return caractere;
    }
}

function isTextoVazio(){
    let valor = document.getElementById('texto-digitado').value;
    return valor == '' || valor.trim() == '';//vazia e somente espaços em branco
}

function descriptografar(){
    limparImagemETexto();
    // margemTextoFinal();
    mostrarElemento('botao-copiar');

    let novoTexto = document.getElementById('texto-digitado').value;

    novoTexto = novoTexto.replaceAll('ai', 'a');//pai pode virar pa
    novoTexto = novoTexto.replaceAll('enter', 'e');    
    novoTexto = novoTexto.replaceAll('imes', 'i');
    novoTexto = novoTexto.replaceAll('ober', 'o');
    novoTexto = novoTexto.replaceAll('ufat', 'u');
    
    document.getElementById('texto-final').innerHTML = novoTexto; 
}

function criptografar(){
    limparImagemETexto()
    // margemTextoFinal();
    mostrarElemento('botao-copiar');
    
    let textoSplitador = document.getElementById('texto-digitado').value.split("");
    let novoTexto = "";

    for (let i = 0; i < textoSplitador.length; i++) {
        let caractere = textoSplitador[i];
        
        caractere = trocarCaractere(caractere);//nem todos precisam entrar aqui, melhore

        novoTexto += caractere;
    }
    document.getElementById('texto-final').innerHTML = novoTexto;
}
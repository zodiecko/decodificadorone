function modoInicial(){
    limparCampo('copiar');
    limparCampoTexto('textoFinal');//precisa mesmo?
    mostraElemento('pessoaLupa');
    mostraElemento('semTexto');
    mostraElemento('digitarTexto');

}

function limparCampoTexto(elementoID){
    document.getElementById(elementoID).innerHTML = '';
}

function limparCampo(elementoID){//só não mostra
    document.getElementById(elementoID).style.display = 'none';
}
function mostraElemento(elementoID){
    document.getElementById(elementoID).style.display = '';
}
function mostrarBotaoCopiar(){
    document.getElementById('copiar').style.display = ''; 
}

function limparImagemETexto(){    
    limparCampo('semTexto');    
    limparCampo('pessoaLupa');
    limparCampo('digitarTexto');
}

function margemTextoFinal(){
    document.getElementById('textoFinal').style.margin = "10% 10% auto 10%";
}

function copiarParaAreaDeTransferencia() {
    var copyText = document.getElementById("textoFinal").innerHTML;
    navigator.clipboard.writeText(copyText);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText;
}
// É só usar replaceAll meua migo
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
    let valor = document.getElementById('texto').value;
    return valor == '' || valor.trim() == '';
}

function descriptografar(){
    limparImagemETexto();
    mostrarBotaoCopiar();
    margemTextoFinal();

    let textoDescriptografado = document.getElementById('texto').value;

    textoDescriptografado = textoDescriptografado.replaceAll('ai', 'a');//pai pode virar pa
    textoDescriptografado = textoDescriptografado.replaceAll('enter', 'e');    
    textoDescriptografado = textoDescriptografado.replaceAll('imes', 'i');
    textoDescriptografado = textoDescriptografado.replaceAll('ober', 'o');
    textoDescriptografado = textoDescriptografado.replaceAll('ufat', 'u');

    document.getElementById('textoFinal').innerHTML = textoDescriptografado; 

}

function criptografar(){
    margemTextoFinal();
    limparImagemETexto();//fazer controle de exceção, campo sem texto
    mostrarBotaoCopiar();
    
    let textoSplitador = document.getElementById('texto').value.split("");
    let textoDescriptografado = "";

    for (let i = 0; i < textoSplitador.length; i++) {
        let caractere = textoSplitador[i];
        
        caractere = trocarCaractere(caractere);//nem todos precisam entrar aqui, melhore

        textoDescriptografado += caractere;
    }
    document.getElementById('textoFinal').innerHTML = textoDescriptografado;
}
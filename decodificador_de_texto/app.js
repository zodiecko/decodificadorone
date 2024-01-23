let texto = "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"

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

function desencriptar(){
    let textoDesencriptografado = document.getElementById('texto').value;

    textoDesencriptografado = textoDesencriptografado.replaceAll('ai', 'a');//pai pode virar pa
    textoDesencriptografado = textoDesencriptografado.replaceAll('enter', 'e');    
    textoDesencriptografado = textoDesencriptografado.replaceAll('imes', 'i');
    textoDesencriptografado = textoDesencriptografado.replaceAll('ober', 'o');
    textoDesencriptografado = textoDesencriptografado.replaceAll('ufat', 'u');

    document.getElementById('texto').value = textoDesencriptografado; 

}

function criptografar(){
    let textoSplitador = document.getElementById('texto').value.split("");
    let textoDesencriptografado = "";

    for (let i = 0; i < textoSplitador.length; i++) {
        let caractere = textoSplitador[i];
        
        caractere = trocarCaractere(caractere);//nem todos precisam entrar aqui, melhore

        textoDesencriptografado += caractere;
    }
    document.getElementById('texto').value = textoDesencriptografado;
}
const btnEncriptar = document.querySelector('.blue')
const btnCopiar = document.querySelector('.copiarTexto')
const btnDesencriptar = document.querySelector('.greyDesencriptar')
const textoEntrada = document.querySelector('.textareaUsuario')
const textosEImg = document.querySelector('.textoImg')
const resultado = document.querySelector('.textareaMensaje')


function ocultar(){
    textosEImg.classList.add("hidden")
    btnCopiar.classList.remove("hidden")
    btnDesencriptar.classList.add("greyDespues")
}

function captarTexto() {
    let mensaje = document.querySelector('.textareaUsuario')
    return textoEntrada.value;
}

btnCopiar.addEventListener ('click', e => {
    resultado.select();
    document.execCommand('copy');
})

function encriptar(){
    ocultar();
    let texto = captarTexto()
    resultado.textContent = encriptarTexto(texto)
}

function desencriptar() {
    ocultar();
    let texto = captarTexto()
    resultado.textContent = desencriptarTexto(texto)
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
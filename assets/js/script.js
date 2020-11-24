/* 
por Tag : getElementByName()
por Id : getElementById()
por Nome : getElementsbyName()
por Classe : getElementsByClassName()
porSeletor : querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'  

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3 ) { /* conta quantas letras tem */
        txtNome.innerHTML = '&#x02A2F' /* coloca dentro da varial o valor*/
        txtNome.style.color = 'red'
      
    } else {
        txt.innerHTML = '&#10004' /* coloca dentro da varial o valor*/
        txt.style.color = 'green'
        nomeOk = true
    }

}

/* VALIDANDO O EMAIL */

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { /* indexof conta se tem caracter especial */
        txtEmail.innerHTML = '&#x02A2F'
        txtEmail.style.color = 'red'
        
    } else {
        txtEmail.innerHTML = '&#10004'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'digite no máximo 100 caracteres'
        txtAssunto.style.fontFamily = 'Staatliches';
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && emailOk == true){
    alert ('Formulario enviado com sucesso!')
} else {
    alert ('Preencha o formulário corretamente antes de enviar!')
}
}

/*function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.length = '900px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.length = '250px'
}

*/
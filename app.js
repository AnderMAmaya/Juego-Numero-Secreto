let numeroSecreto = (0);
let intentos =0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        } else {
        asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    //let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value=''; estas dos lineas se remplazan por el .valvue=''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta en incluido en la lista hacemos otra operacion 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //generar numero aleatoreo
    numeroSecreto = generarNumeroSecreto();
     //Inicialiar el numero de intentos 
     intentos = 1;
    
}
function reinciarJuego() {
    //limpiar caja, reinciar sistema
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabiliar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
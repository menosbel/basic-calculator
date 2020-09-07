let operacionSuma = document.getElementById('sumar'),
    operacionResta = document.getElementById('restar'),
    operacionMultiplicacion = document.getElementById('multiplicar'),
    operacionDivision = document.getElementById('dividir');
    btnBorrar = document.getElementById('btn-borrar'); 

let signo = document.getElementById('signo'),
    numero1 = document.getElementById('inputLeft'),
    numero2 = document.getElementById('inputRight'),
    resultado = document.getElementById('resultado');

function operacion(operador){
    if (numero1.value == '' || numero2.value == '') {
        alert('Ingresá un número');
        return;
    }
    signo.innerHTML = operador;
    let n1 = parseInt(numero1.value),
        n2 = parseInt(numero2.value);
    
    switch(operador) {
        case '+':
            resultado.innerHTML = n1 + n2;
            break;
        case '-':
            resultado.innerHTML = n1 - n2;
            break;
        case '*':
            resultado.innerHTML = n1 * n2;
            break;
        case '/':
            resultado.innerHTML = (n1 / n2).toFixed(2);
            break;
        default:
            alert('Ocurrió un error')
    }
}

function suma (){
    operacion('+');
}

function resta(){
    operacion('-');
}

function multiplicacion(){
    operacion('*');
}

function division(){
    operacion('/');
}

function borrar(){
    signo.innerHTML = '';
    resultado.innerHTML = '';
    numero1.value = '';
    numero2.value = '';
}

operacionSuma.addEventListener('click', suma)
operacionResta.addEventListener('click', resta)
operacionMultiplicacion.addEventListener('click', multiplicacion)
operacionDivision.addEventListener('click', division)
btnBorrar.addEventListener('click', borrar)

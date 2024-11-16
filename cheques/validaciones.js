//FUNCION DE SOLO NUMEROS ENTEROS O DECIMALES
function validarSoloNumerosMonto() {
    let campo = document.getElementById('amount').value;
    
    const regex = /^[0-9]*\.?[0-9]*$/;
    
    if (!regex.test(campo)) {
        document.getElementById('amount').value = campo.slice(0, -1); // Elimina el último carácter ingresado
        return false;
    }
    
    return true;
}

//VALIDACIONES DE SOLO NUMEROS
function validarSoloNumerosCheque() {
    let campo = document.getElementById('cheque-number').value;
    
    const regex = /^[0-9]*$/;
    
    if (!regex.test(campo)) {
        document.getElementById('cheque-number').value = campo.slice(0, -1); // Elimina el último carácter ingresado
        return false;
    }
    
    return true;
}

//ASIGNARLE LA VALIDACION DE MONTO AL CAMPUS DE MONTO
//LLAMAMOS A LA FUNCION DE CONVERTIR A LETRAS QUE ESTA EN EL ARCHIVO CONVERTNUM.JS
document.getElementById("amount").oninput = function() {
    validarSoloNumerosMonto();
    convertirMontoALetras();
}
//ASIGNARLE LA VALIDACION DE NUMERO DE CHEQUE
document.getElementById("cheque-number").oninput = function(){
    validarSoloNumerosCheque(); 
}

//VALIDACION DE FECHA, NO ACEPTE DOMINGO
$(document).ready(function() {
    $("#cheque-date").datepicker({
        beforeShowDay: function(date) {
            var day = date.getDay();
            return [day !== 0, ""];
        }
    });
});

//------------------------------------------------------
// VERIFICAR QUE LOS CAMPOS ESTEN LLENOS
function verificar_datos_cheques(event) {
    event.preventDefault();
    let ncheque = document.getElementById("cheque-number").value;
    let fecha = document.getElementById("cheque-date").value;
    let proveedor = document.getElementById("proovedores").value;
    let monto = document.getElementById("amount").value;

    let valid = true;

    if (ncheque.trim() === "") {
        alert("El campo de No. Cheque está vacío.");
        document.getElementById("cheque-number").focus();
        valid = false;
    } else if (fecha.trim() === "") {
        alert("El campo de Fecha está vacío.");
        document.getElementById("cheque-date").focus();
        valid = false;
    } else if (proveedor.trim() === "") {
        alert("El campo de Proveedor está vacío.");
        document.getElementById("proovedores").focus();
        valid = false;
    } else if (monto.trim() === "") {
        alert("El campo de Monto está vacío.");
        document.getElementById("amount").focus();
        valid = false;
    }

    if (valid) {
        guardarCheque();
    }
}

document.getElementById("formulariocheque").addEventListener("submit", verificar_datos_cheques);

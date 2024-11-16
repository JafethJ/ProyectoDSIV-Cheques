function reload() { //FUNCION PARA RECARGAR LA PAGINA
    window.location.href = 'cheque_disp_crear.php';
}
function guardarCheque() {   //FUNCION GUARDAR CHEQUE EN LA BD
    $.ajax({
        type: "POST",
        url: "guardarcheque.php",
        data: $("form").serialize(),
        success: function (resp) {
            console.log("Datos enviados:", $("form").serialize());
            document.getElementById('formulariocheque').reset();
            alert("Cheque Guardado");
            reload();
        },
        error: function (xhr, status, error) {
            console.error("Error en el AJAX:", status, error);
        }
    });
}

function limpiar_ver() {  //OCULTA EL INPUT DE FECHA DE ANULACION PRIMERO ANTES DE VER
    // Selecciona todos los botones de anulación
    const input_fecha_anulacion = document.querySelectorAll('.anulacion_date');

    // Oculta y deshabilita los botones al inicio
    input_fecha_anulacion.forEach(button => {
        button.classList.add('disabled'); // Añade la clase 'disabled'
        button.setAttribute('hidden', true); // Oculta el botón
        button.setAttribute('disabled', true); // Deshabilita el botón
    });

    ver_cheque(); //LLAMA A LA FUNCION VER CHEQUE
}
function ver_cheque() {   // FUNCION PARA VER DATOS DE UN CHEQUE
    var chequeNumero = document.getElementById('cheque-number').value.trim();

    // Selecciona todos los botones de anulación
    const input_fecha_anulacion = document.querySelectorAll('.anulacion_date');

    // Realiza la solicitud AJAX para buscar el cheque
    $.ajax({
        type: "POST",
        url: "buscar_cheque.php",
        data: { id: chequeNumero },
        dataType: "json",
        success: function (response) {
            if (response.error) {
                alert(response.error);
                return;
            }

            var status_cheques = response.estado;

            // Muestra la información del cheque
            document.getElementById('cheque-date').value = response.fecha || '';
            document.getElementById('amount').value = response.monto || '';
            convertirMontoALetras(); // Asegúrate de que esta función esté definida
            document.getElementById('observation').value = response.observacion || '';
            var selectProveedor = document.getElementById('proovedores');
            selectProveedor.value = response.proveedor;

            // ESTADO DE CHEQUE
            document.getElementById('cheque-status').value = response.estado || '';
            // FECHA DE ANULACION
            document.getElementById('anulacion-date').value = response.fecha_anulacion || '';

            // Si el cheque está anulado, muestra y habilita los botones de anulación
            if (status_cheques == "Anulado") {
                input_fecha_anulacion.forEach(button => {
                    button.classList.remove('disabled');
                    button.removeAttribute('hidden'); // Muestra el botón
                    button.removeAttribute('disabled'); // Habilita el botón
                });
            }
        },
        error: function (xhr, status, error) {
            console.log('Error en la solicitud AJAX:', error);
        }
    });
}

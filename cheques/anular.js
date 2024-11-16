function anular() {
    // Obtener el ID del cheque (número de cheque)
    var chequeNumero = document.getElementById('cheque-number').value.trim();

    if (!chequeNumero) {
        alert("Por favor, ingrese un número de cheque válido.");
        return;
    }

    if (!confirm("¿Estás seguro de que deseas anular este cheque?")) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "anular_cheque.php", 
        data: { id: chequeNumero },
        success: function(response) {
            try {
                var resultado = JSON.parse(response);
                
                if (resultado.success) {
                    alert("El cheque ha sido anulado exitosamente.");
                    // Actualizacion de estado del cheque y la fecha de anulación en el formulario
                    document.getElementById('cheque-status').value = "Anulado";
                    
                    // se cambia el formato de la fecha a MM/DD/YYYY
                    var today = new Date();
                    var formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
                    document.getElementById('anulacion-date').value = formattedDate;
                } else {
                    alert("No se pudo anular el cheque: " + resultado.message);
                }
            } catch (e) {
                console.error("Error al procesar la respuesta del servidor:", e);
                alert("Ocurrió un error al anular el cheque.");
            }
        },
        error: function(xhr, status, error) {
            console.error("Error en la solicitud AJAX:", status, error);
            alert("Ocurrió un error al comunicarse con el servidor.");
        }
    });
}

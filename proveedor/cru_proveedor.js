function reload() { //FUNCION PARA RECARGAR LA PAGINA
    window.location.href = 'proveedor_disp_ver.php';
}
function reloadguardar() { //FUNCION PARA RECARGAR LA PAGINA
    window.location.href = 'proveedor_disp_crear.php';
}

function guardarProveedor() { //FUNCION PARA GUARDAR PROVEEDOR EN LA BD
    $.ajax({
        type: "POST",
        url: "guardar_proveedor.php",
        data: $("form").serialize(),
        success: function (resp) {
            console.log("Datos enviados:", $("form").serialize());
            alert("Proveedor Guardado");
            reloadguardar();

        },
        error: function (xhr, status, error) {
            console.error("Error en el AJAX:", status, error);
        }
    });
}

function editar_display() { //BOTONOES PARA MOSTRAR LOS BOTONES DE EDITAR
    const input_id = document.querySelector('.input-id');
    const input_name = document.querySelector('.input-name');
    const btn_editar = document.querySelector('.btn-editar');
    const btn_cancelar = document.querySelector('.btn-cancelar');
    const btn_actualizar = document.querySelector('.btn-actualizar');

    // Hacer que el campo de ID no sea editable
    input_id.setAttribute('readonly', 'true');
    input_id.setAttribute('disabled', 'true');

    // Hacer que el campo de nombre sea editable
    input_name.removeAttribute('readonly');
    input_name.removeAttribute('disabled');

    // Ocultar y deshabilitar los botones de editar y eliminar
    btn_editar.setAttribute('hidden', 'true');
    btn_editar.setAttribute('disabled', 'true');

    // Mostrar y habilitar los botones de cancelar y actualizar
    btn_cancelar.removeAttribute('hidden');
    btn_cancelar.removeAttribute('disabled');
    btn_actualizar.removeAttribute('hidden');
    btn_actualizar.removeAttribute('disabled');
}

function cancelar_editar_display() {  //FUNCION PARA CANCELAR LOS BOTONES DE EDITAR
    window.location.href = 'proveedor_disp_ver.php';
}

function buscarProveedor() { // FUNCION DEL BOTON BUSCAR PROVEEDOR
    let idProveedor = document.getElementById('id-proveedor').value.trim();

    // SOLICITUD DE AJAX
    $.ajax({
        type: "POST",
        url: "buscar_proveedor.php",
        data: { 'id-proveedor': idProveedor },
        dataType: "json",
        success: function (response) {
            const btn_editar = document.querySelector('.btn-editar');
            
            if (response.error) {
                alert(response.error);
                document.getElementById('proveedor').value = '';
                
                // OCULTAR Y DESHABILITAR EL BOTON DE EDITAR SI NO HAY DATOS
                btn_editar.setAttribute('hidden', 'true');
                btn_editar.setAttribute('disabled', 'true');
            } else {
                // Cargar el nombre del proveedor
                document.getElementById('proveedor').value = response.nombre;
                
                // MOSTRAR Y HABILITAR EL BOTON DE EDITAR SI HAY DATOS
                btn_editar.removeAttribute('hidden');
                btn_editar.removeAttribute('disabled');
            }
        },
        error: function (xhr, status, error) {
            console.log("Error en la solicitud AJAX:", error);
        }
    });
}

function actualizarProveedor() {
    var idProveedor = document.getElementById('id-proveedor').value.trim();
    var proveedor = document.getElementById('proveedor').value.trim();
    
    if (!idProveedor) {
        alert("Por favor, ingrese el ID de proveedor");
        return;
    }

    if (!confirm("¿Estás seguro de actualizar este proveedor?")) {
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "actualizar_proveedor.php",
        data: { id: idProveedor, nombre: proveedor },  
        success: function(response) {
            try {
                var resultado = JSON.parse(response);

                if (resultado.success) {
                    alert(resultado.message); 
                    reload();
                } else {
                    alert("Error al actualizar proveedor: " + resultado.message);
                }
            } catch (e) {
                console.error("Error al procesar la respuesta del servidor:", e);
                alert("Ocurrió un error al actualizar el proveedor.");
            }
        },
        error: function(xhr, status, error) {
            console.error("Error en la solicitud AJAX:", status, error);
            alert("Ocurrió un error al comunicarse con el servidor.");
        }
    });
}



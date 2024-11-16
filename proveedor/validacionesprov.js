function validarSoloNumerosProveedor() {
    let campo = document.getElementById('id-proveedor').value;
    
    const regex = /^[0-9]*$/;
    
    if (!regex.test(campo)) {
        document.getElementById('id-proveedor').value = campo.slice(0, -1); // Elimina el último carácter ingresado
        return false;
    }
    
    return true;
}

//ASIGNAMOS LA VALIDACION DE NUMEROS A IDPROVEEDOR
document.getElementById("id-proveedor").oninput = function() {
    validarSoloNumerosProveedor();
}

//VERIFICAR QUE LOS CAMPOS ESTEN LLENOS
function verificar_datos_proveedor(event) {
    event.preventDefault();
    let idproveedor = document.getElementById("id-proveedor").value;
    let nameproveedor = document.getElementById("proveedor").value;

    let valid = true;

    if (idproveedor.trim() === "") {
        alert("El campo de ID proveedor está vacío.");
        document.getElementById("id-proveedor").focus();
        valid = false;
    } else if (nameproveedor.trim() === "") {
        alert("El campo de nombre proveedor está vacío.");
        valid = false;
    }

    if (valid) {
        guardarProveedor();
    }
}

document.getElementById("formularioproveedor").addEventListener("submit", verificar_datos_proveedor);
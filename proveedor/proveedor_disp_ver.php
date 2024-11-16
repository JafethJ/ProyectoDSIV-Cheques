<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proveedores</title>
    <link rel="stylesheet" href="../Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="Style-prov.css">

    <!-- LINK DEL AJAX -->
    <script src="../src/jquery3-4.min.js" type="text/javascript"></script>
</head>

<body>
    <form id="formularioproveedor">
        <div id="provedor-container" class="provedor-container">
            <div>
                <!--botones siempre visibles-->
                <a href="./proveedor_disp_crear.php"><input type="button" class="btn-sm" value="Nuevo Proveedor"></a>
                <a href="./proveedor_disp_ver.php"><input type="button" class="btn-sm" value="Ver Proveedor"></a>
                <br>
                <hr class="hr">
                <input type="button" class="btn-ver" value="Buscar" onclick="buscarProveedor()">
            </div>
            <div>
                <div>
                    <label for="id-proveedor">ID proveedor</label> <br>
                    <input type="text" id="id-proveedor" name="id-proveedor" class="input-id" maxlength="5">
                    </div>
                <div>
                    <label for="proveedor">Nombre proveedor</label> <br>
                    <input type="text" id="proveedor" name="proveedor" class="input-name"  readonly>
                </div>
            </div>
            <div>
                <!-- botones de ver -->
                <input type="button" value="Editar" class="btn-ver btn-editar" onclick="editar_display()" hidden disabled>

                <!-- botones de actualizar -->
                <input type="button" value="Actualizar" class="btn-actualizar" onclick="actualizarProveedor()" hidden disabled>
                <input type="button" value="Cancelar" class="btn-cancelar" onclick="cancelar_editar_display()" hidden disabled>

            </div>
        </div>
    </form>
    <!-- Scrip de CRU de Proveedor -->
    <script src="cru_proveedor.js"></script>
    <script src="validacionesprov.js"></script>
</body>

</html>
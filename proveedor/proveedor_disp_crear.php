
<?php
$host = "localhost";
$user = "d42024";
$pass = "1234";
$BD = "bdcheque";
$conexion = mysqli_connect($host, $user, $pass, $BD);

//CONSULTAR EL ULTIMO NUMERO DE CHEQUE
$result = mysqli_query($conexion, "SELECT MAX(id) AS ultimo_proveedor FROM proveedores");

if ($row = mysqli_fetch_assoc($result)) {
    $ultimo_proveedor = $row['ultimo_proveedor'];
} else {
    $ultimo_proveedor = 1;
}

//GUARDAR EL ULTIMO NUMERO Q SE MOSTRARÁ
$siguiente_proveedor = $ultimo_proveedor + 1;

?>
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
    <form id="formularioproveedor" method="POST">
        <div id="formularioproveedor" class="provedor-container">
            <div>
                <!--botones siempre visibles-->
                <a href="./proveedor_disp_crear.php"><input type="button" class="btn-sm" value="Nuevo Proveedor"></a>
                <a href="./proveedor_disp_ver.php"><input type="button" class="btn-sm" value="Ver Proveedor"></a>
                <br>

            </div>
            <div>
                <div>
                    <label for="id-proveedor">ID proveedor</label> <br>
                    <input type="text" id="id-proveedor" class="input-id" name="id-proveedor" placeholder="01"
                        maxlength="5" value="<?php echo $siguiente_proveedor; ?>" readonly><br>
                </div>
                <div>
                    <label for="proveedor">Nombre proveedor</label> <br>
                    <input type="text" id="proveedor" class="input-name" name="proveedor"
                        placeholder="Nombre del nuevo proveedor">
                </div>
            </div>
            <div>
                <!-- Botones de guardar -->
                <input type="button" value="Guardar" class="btn-crear" onclick="guardarProveedor()">
            </div>
        </div>
    </form>
    <!-- Scrip de CRU de Proveedor -->
    <script src="cru_proveedor.js"></script>
    <script src="validacionesprov.js"></script>
</body>

</html>
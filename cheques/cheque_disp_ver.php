<?php
$host = "localhost";
$user = "d42024";
$pass = "1234";
$BD = "bdcheque";
$conexion = mysqli_connect($host, $user, $pass, $BD);

// //CONSULTAR EL ULTIMO NUMERO DE CHEQUE
// $result = mysqli_query($conexion, "SELECT MAX(numero_ck) AS ultimo_cheque FROM cheques");

// if ($row = mysqli_fetch_assoc($result)) {
//     $ultimo_cheque = $row['ultimo_cheque'];
// } else {
//     $ultimo_cheque = 1;
// }

// //GUARDAR EL ULTIMO NUMERO Q SE MOSTRARÁ
// $siguiente_cheque = $ultimo_cheque + 1;

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheque</title>
    <link rel="stylesheet" href="../Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./Style.css">

    <!--EL RECURSO DE AJAX-->
    <script src="../src/jquery3-4.min.js" type="text/javascript"></script>

    <!--LIBRERIAS EXTERNAS PARA LA FECHA-->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</head>

<body>
    <div class="cheque-container">
        <a href="cheque_disp_crear.php"><button id="create-cheque">Crear Cheque</button></a>
        <a href="cheque_disp_ver.php"> <button id="read-cheque" class="btn-ver">Ver cheque</button></a>
        <button id="btn-buscar" class="btn-buscar" onclick="ver_cheque()">buscar</button>
        <br><br>
        <form id="formulariocheque">
            <div class="row-inline">
                <div class="small-field">
                    <label for="cheque-number">No. Cheque:</label>
                    <input type="text" id="cheque-number" name="cheque-number" class="cheque-number" maxlength="7" oninput="limpiar_ver()">
                </div>
                <div class="small-field">
                    <label for="cheque-date">Fecha:</label>
                    <input type="text" id="cheque-date" name="cheque-date" class="editable-input" readonly disabled>
                </div>
            </div>

            <div class="row-inline">
                <div class="small-field cheque-status">
                    <label for="cheque-status">Estado de cheque:</label>
                    <input type="text" id="cheque-status" name="cheque-status" class="cheque-status" readonly>
                </div>
                <div class="small-field anulacion_date" id="anulacion_date" hidden>
                    <label for="cheque-date">Fecha de anulación:</label>
                    <input type="text" id="anulacion-date" readonly>
                </div>
            </div>

            <div class="row-inline">
                <div class="full-field">
                    <label for="proovedores">Páguese a la orden de: </label>
                    <select class="size-select editable-select" id="proovedores" name="proovedores" disabled>
                        <?php
                        $buscarproveedor = mysqli_query($conexion, "SELECT * FROM proveedores");
                        while ($proveedorfinded = mysqli_fetch_assoc($buscarproveedor)) {
                            echo "<option value='" . $proveedorfinded['id'] . "'>" . $proveedorfinded['nombre'] . "</option>";
                        }
                        ?>
                    </select>
                </div>
            </div>

            <div class="row-inline">
                <div class="small-field">
                    <label for="amount">Monto (B/.):</label>
                    <input type="text" id="amount" class="editable-input" name="amount" placeholder="00.00"
                        maxlength="9" readonly>
                </div>
                <div class="full-field">
                    <label for="amount-letters">La Suma de (en letras):</label>
                    <input type="text" id="amount-letters" name="amount-letters" readonly>
                </div>
            </div>

            <div class="observation-field">
                <label for="observation">Observación:</label>
                <textarea id="observation" class="editable-input" name="observation" rows="3" readonly></textarea>
            </div>

            <!-- BOTON DE ANULAR -->
            <button class="btn-anular" type="text" onclick="anular()">Anular</button>
        </form>

        <script src="./convertnum.js"></script>
        <script src="./cr_cheques.js"></script>
        <script src="./anular.js"></script>
    </div>
</body>

</html>
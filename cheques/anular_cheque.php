<?php
$host = "localhost";
$user = "d42024";
$pass = "1234";
$BD = "bdcheque";

// Conectar a la base de datos
$conexion = mysqli_connect($host, $user, $pass, $BD);

if (!$conexion) {
    die(json_encode(["success" => false, "message" => "Error de conexión a la base de datos"]));
}

// Verificar si se ha enviado un ID de cheque
if (!isset($_POST['id'])) {
    echo json_encode(["success" => false, "message" => "No se proporcionó un ID de cheque"]);
    exit;
}

$chequeNumero = $_POST['id'];
$fechaAnulacion = date("m/d/Y");

// Actualizar la fila correspondiente en la base de datos
$query = "UPDATE cheques SET estado = 'Anulado', fecha_anulacion = '$fechaAnulacion' WHERE numero_ck = '$chequeNumero'";

if (mysqli_query($conexion, $query)) {
    echo json_encode(["success" => true, "message" => "Cheque anulado correctamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al anular el cheque: " . mysqli_error($conexion)]);
}

// Cerrar la conexión
mysqli_close($conexion);
?>

<?php

$host="localhost";
$user="d42024";
$pass="1234";
$BD="bdcheque";
$conexion = mysqli_connect($host, $user, $pass, $BD);


$proveedor = intval($_POST['proovedores']);
$ncheque = intval($_POST['cheque-number']);
$monto = floatval($_POST['amount']);
$observacion = $_POST['observation'];
$fecha = $_POST['cheque-date'];
$estado = "Vigente";
// Ejecutar la consulta de inserción
$enviar = mysqli_query($conexion, "INSERT INTO cheques 
    (numero_ck, proveedor, monto, observacion, fecha, estado) 
    VALUES 
    ('$ncheque', '$proveedor', '$monto', '$observacion', '$fecha', '$estado')");

if (!$enviar) {
    die("Error en la consulta: " . mysqli_error($conexion));
}


mysqli_close($conexion);
?>
<?php

$host="localhost";
$user="d42024";
$pass="1234";
$BD="bdcheque";
$conexion = mysqli_connect($host, $user, $pass, $BD);


$idproveedor = intval($_POST['id-proveedor']);
$nameproveedor = $_POST['proveedor'];

//Ejecutar la consulta de inserción
$enviar = mysqli_query($conexion, "INSERT INTO proveedores
    (id, nombre)
    VALUES
    ('$idproveedor', '$nameproveedor')");

if (!$enviar) {
    die("Error en la consulta: " . mysqli_error($conexion));
}

mysqli_close($conexion);
?>
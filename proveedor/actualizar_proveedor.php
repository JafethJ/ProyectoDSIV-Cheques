<?php
$host = "localhost";
$user = "d42024";
$pass = "1234";
$BD = "bdcheque";

$conexion = mysqli_connect($host, $user, $pass, $BD);

if (!$conexion) {
    die(json_encode(["success" => false, "message" => "Error de conexión a la base de datos"]));
}

if (!isset($_POST['id']) || !isset($_POST['nombre'])) {
    echo json_encode(["success" => false, "message" => "ID de proveedor o nombre no proporcionados"]);
    exit;
}

$id_proveedor = $_POST['id'];
$nombreproveedor = $_POST['nombre'];

$id_proveedor = mysqli_real_escape_string($conexion, $id_proveedor);
$nombreproveedor = mysqli_real_escape_string($conexion, $nombreproveedor);

$query = "UPDATE proveedores SET nombre = '$nombreproveedor' WHERE id = '$id_proveedor'";

if (mysqli_query($conexion, $query)) {
    echo json_encode(["success" => true, "message" => "Proveedor actualizado correctamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al actualizar el proveedor: " . mysqli_error($conexion)]);
}

mysqli_close($conexion);

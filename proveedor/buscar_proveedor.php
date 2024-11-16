<?php

$host="localhost";
$user="d42024";
$pass="1234";
$BD="bdcheque";
$conexion = mysqli_connect($host, $user, $pass, $BD);

if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}

$idproveedor = $_POST['id-proveedor'];

$query = "SELECT * FROM proveedores WHERE id = '$idproveedor'";
$result = mysqli_query($conexion, $query);

if (mysqli_num_rows($result) > 0) {
    $data = mysqli_fetch_assoc($result);
    echo json_encode($data);
} else {
    echo json_encode(['error' => 'Proveedor no encontrado']);
}

mysqli_close($conexion);
?>
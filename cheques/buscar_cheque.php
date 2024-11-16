<?php
$host = "localhost";
$user = "d42024";
$pass = "1234";
$db = "bdcheque";

$conexion = mysqli_connect($host, $user, $pass, $db);

if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}

$id = $_POST['id'];

$query = "SELECT * FROM cheques WHERE numero_ck = '$id'";
$result = mysqli_query($conexion, $query);

if (mysqli_num_rows($result) > 0) {
    $data = mysqli_fetch_assoc($result);

    $codigo_proveedor = $data['proveedor'];

    $query_proveedor = "SELECT nombre FROM proveedores WHERE id = '$codigo_proveedor'";
    $result_proveedor = mysqli_query($conexion, $query_proveedor);
    $nombre_proveedor = mysqli_fetch_assoc($result_proveedor)['nombre'];

    $data['nombre'] = $nombre_proveedor;
    $data['proveedor'] = $codigo_proveedor; 

    echo json_encode($data);
} else {
}

mysqli_close($conexion);
?>

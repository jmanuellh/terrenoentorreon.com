<?php

$data = $_POST['datos'];
//$dataspanish =  array("Nombre","Correo","Fecha de nacimiento","Educacion:","Residencia actual","Trabajos");
$msg = "";

for($i = 0; $i < count($data); $i++) {
  $msg .= $data[$i] . "\n";
}

//$nombre = $data[0];
//$correo = $data[1];


//echo $nombre;
//echo $correo;

//$mensaje = "Mensaje: Nombre: $nombre Correo: $correo";
//echo $mensaje;
//echo $msg;
mail("manuellh2008@gmail.com","Nuevo Interesado", $msg);
    
?>
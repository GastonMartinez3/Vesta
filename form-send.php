<?php

// LLAMANDO A LOS CAMPOS =========================
$from = "BeVesta Contacto Web";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$menssage = $_POST['menssage'];
$headers = "From:" . $from;

// DATOS PARA EL CORREO ===========================

$destinatario = "gastonmartinezeq@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta = "Asunto: $subject \n";
$carta .= "Email: $email \n";
$carta .= "Teléfono: $phone \n";
$carta .= "Mensaje: $menssage";

// ENVIANDO MENSAJE ==============================

mail($destinatario, $subject, $carta, $headers);
header('location:form-confirm.html')


?>


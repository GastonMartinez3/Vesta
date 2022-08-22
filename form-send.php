<?php
header("Content-type: text/html;charset=\"utf-8\"");
$nombre = $_POST['name'];
$mail = $_POST['email'];
$telefono = $_POST['phone'];
$asunto = $_POST['subject'];
$empresa = $_POST['menssage'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Asunto: " . $asunto . " \r\n";
$mensaje .= "Teléfono: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $empresa . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'info@bevesta.com.ar';
$asunto = 'Mensaje del formulario web BeVesta';

if (mail($para, $asunto, utf8_decode($mensaje), $header))
echo "<script type='text/javascript'>window.location.href='http://bevesta.com.ar/form-confirm.html';</script>";

?>
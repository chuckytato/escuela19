<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    if ($email) {
        $to = "escuela_19@gmail.com";  // Cambia esto a tu email
        $subject = "Mensaje desde formulario de contacto";
        $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
        $headers = "From: $email\r\nReply-To: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado correctamente";
        } else {
            echo "Error al enviar el mensaje";
        }
    } else {
        echo "Email inválido";
    }
} else {
    echo "Método no permitido";
}
?>

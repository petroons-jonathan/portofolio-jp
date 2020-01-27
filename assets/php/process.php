
<?php
$servername = "localhost";
$username = "id12378042_jonathan";
$password = "rftgyhuj";
$dbname = "id12378042_process";


$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Le nom est requis";
} else {
    $nameBrut = $_POST["name"];
    $name = filter_var($nameBrut, FILTER_SANITIZE_STRING);
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "L'email est requis";
} else {
    $emailBrut = $_POST["email"];
    $email = filter_var($emailBrut, FILTER_SANITIZE_EMAIL);
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Veuillez écrire un message";
} else {
    $messageBrut = $_POST["message"];
    $message = filter_var($messageBrut, FILTER_SANITIZE_STRING);
}

 
$EmailTo = "petroons.jonathan@gmail.com";
$Subject = "Nouveau Message";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: ' . $email . "\r\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, $headers);
 
// redirect to success page
if ($success){
   echo "<p>Votre message a bien été envoyé.</p>";
}else{
    echo "<p>Votre message n'a pas été envoyé.</p>";
}
 

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
if ($name == ""){
echo "<p>Le nom est requi<p>"; 
}
else if ($email == ""){
    echo "<p>L'email est requis<p>";}
else if ($message == ""){
    echo "<p>Le message est requis<p>";}
else{
    $sql = "INSERT INTO process (name, email,message)
    VALUES ('$name', '$email','$message')";
    mysqli_close($conn);
}

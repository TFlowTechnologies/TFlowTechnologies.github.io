<?php
// define variables and set to empty values
$name = $email = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $message = test_input($_POST["comment"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
mail("tflowtechnologies@gmail.com", "CONTACT US FORM " . $name, $message, "From: " . $name . "<" . $email . ">");
?>
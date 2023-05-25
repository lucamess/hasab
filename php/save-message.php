<?php

require_once "connect-db.php";
require_once "utils.php";

$message = json_decode($_POST["message"]);
$query = "INSERT INTO hasab_messages("
	. "`message`"
	. ") VALUES ("
	. "'" . mysqli_real_escape_string($conn, $message) . "') ";
mysqli_query($conn, $query);
die(print_op_success());

?>

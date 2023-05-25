<?php

require_once "connect-db.php";
require_once "utils.php";

$query = "SELECT * FROM hasab_messages";
$result = mysqli_query($conn, $query) or die("cheger again abo");
$messages = [];

while($row = mysqli_fetch_assoc($result)) {
	$row = (object) $row;
	array_push($messages, $row->message);
}

mysqli_close($conn);
die(print_data_success($students));

?>

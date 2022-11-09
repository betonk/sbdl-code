<?php
$db_host = "localhost"; // Host name 
$db_username = "root"; // Mysql username 
$db_pass = ""; // Mysql password 
$db_name = "mhs_db"; // Database name 

// Connect to server and select databse.
$koneksi = mysqli_connect($db_host, $db_username, $db_pass, $db_name) or die(mysqli_error($DB));

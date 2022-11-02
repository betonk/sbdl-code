<?php

use LDAP\Result;

include('koneksi.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SBDL | Week 10</title>
</head>
<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>

<body>
    <section>
    <?php
        $sql    = "select * from data";
        $result = mysqli_query($koneksi, $sql) or die("error select table" . mysqli_error($koneksi));

        $array  = array();
        while ($row  = mysqli_fetch_assoc($result)) {
            $array[] = $row;
        }
        echo json_encode($array);
        ?>
    </section>
    <?php 
        mysqli_close($koneksi);
    ?>
</body>
</html>
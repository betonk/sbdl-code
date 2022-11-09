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
    body{
        background-color: #212121;
        color: #f0f0f0;
    }
    table,th,td{
        border-collapse: collapse;
        padding: 0.5rem;
        text-align: center;
    }
    .bawah{
        margin-bottom: 1rem;
    }
    button{
        margin: 5px 0;
    }
</style>

<body>
    <h1>WELCOME TO JUNGLE</h1>
    <div class="bawah"></div>
    <section>
    <?php
        $sql    = "select * from mhs";
        $result = mysqli_query($koneksi, $sql) or die("error koneksi" . mysqli_error($koneksi));

        $array  = array();
        while ($row  = mysqli_fetch_assoc($result)) {
            $array[] = $row;
        }
    ?>
    <div class="Add" id="Add">
        <div class="form-cn">
            <label for="">NIM</label>
            <input type="text" readonly>
        </div>
        <div class="form-cn">
            <label for="">Nama</label>
            <input type="text" name="nama" id="tambah" placeholder="Nama Mahasiswa . . ." required>
        </div>
        <div class="form-cn">
            <label for="">Prodi</label>
            <input type="text" name="prodi" id="tambah" placeholder="Nama Prodi . . ." required>
        </div>
        <button type="button" id="simpan">Simpan</button>
        <button type="button" id="hapus">Hapus</button>
        <div id="hasil"></div>
        <script defer src="script.js"></script>
    </div>
    <center><table border="1" id="tbl">
        <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Prodi</th>
        </tr>
        <tbody id="tbody"></tbody>
    </table></center>
    <script type="text/javascript">
        let arr = <?= json_encode($array, true) ?>;
            // console.log(arr);
            tb = document.getElementById('tbody');
        arr.forEach((item) => {
            // console.log(item);
            const kn = Object.keys(item);
            tr = document.createElement('tr');
            kn.forEach((id)=>{
                td = document.createElement('td');
                td.setAttribute("id", "tdId");
                text = document.createTextNode(item[id]);
                // console.log(text);
                td.appendChild(text);
                tr.appendChild(td);
            })
            tb.appendChild(tr);
        });
    </script>
    
    </section>
    <?php // mysqli_close($koneksi);?>
</body>
</html>
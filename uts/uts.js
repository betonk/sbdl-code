var array = [];

// fetch("./uts.json")
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data){
//         array = data.tani // tani data dari JSON
//     })
//     .catch(function (err){
//         err = console.error();
//         return false;
//     })
fetch("./uts.json")
    .then(response => response.json())
    .then(data => array = data.tani)
    .catch(error => console.error(error)
)
function fdata() {
    var tbl = document.getElementById("tableku");
    tbl.setAttribute("style", "display: revert;");
  
    if (tbl.childElementCount <= 1) {
        for (i = 0; i < array.length; i++) {
            baris = document.createElement("tr");
    
            isi = document.createElement("td");
            isi.setAttribute("id", "idTahun"); //
            isi.innerText = array[i].tahun;
            baris.appendChild(isi);
    
            isi = document.createElement("td");
            isi.setAttribute("id", "idJenis"); //
            isi.innerText = array[i].jenis;
            baris.appendChild(isi);
    
            isi = document.createElement("td");
            isi.setAttribute("id", "idHasil"); //
            isi.innerText = array[i].hasil;
            baris.appendChild(isi);
            tbl.appendChild(baris);
        }
    }
  
    var h = document.querySelectorAll(
        "#idTahun, #idJenis, #idHasil, #tahun, #jenis, #hasil"
        );
    for (var i = 0; i < h.length; i++) {
        h[i].setAttribute("style", "display:revert;");
    }
}

function closeData(){
    var h = document.querySelectorAll(
        "#idTahun, #idJenis, #idHasil, #tahun, #jenis, #hasil"
        );
    for (var i = 0; i < h.length; i++) {
        h[i].setAttribute("style", "display:none;");
    }
}

function remove_dup(array){
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < array.length; i++){
        obj[array[i]] = true;
    }
    for (var key in obj){
        ret_arr.push(key)
    }
    return ret_arr
}

function tahunData() {
    var e = document.querySelectorAll("#idTahun")
        for (var i = 0; i < e.length; i++) {
            e[i].setAttribute("style", "display:revert;")
        }
    var h = document.querySelectorAll("#idJenis, #idHasil");
        for (var i = 0; i < h.length; i++) {
          h[i].setAttribute("style", "display:none;");
        }
    document.getElementById("tahun").style.display = "revert";
    document.getElementById("jenis").style.display = "none";
    document.getElementById("hasil").style.display = "none";
}
function jenisData() {
    var e = document.querySelectorAll("#idJenis");
    for (var i = 0; i < e.length; i++) {
      e[i].setAttribute("style", "display:revert;");
    }
    var h = document.querySelectorAll("#idTahun, #idHasil");
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:none;");
    }
    document.getElementById("tahun").style.display = "none";
    document.getElementById("jenis").style.display = "revert";
    document.getElementById("hasil").style.display = "none";
}
function hasilData() {
    var e = document.querySelectorAll("#idHasil");
    for (var i = 0; i < e.length; i++) {
      e[i].setAttribute("style", "display:revert;");
    }
    var h = document.querySelectorAll("#idTahun, #idJenis");
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:none;");
    }
    document.getElementById("tahun").style.display = "none";
    document.getElementById("jenis").style.display = "none";
    document.getElementById("hasil").style.display = "revert";
}
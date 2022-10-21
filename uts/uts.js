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
            tr = document.createElement("tr");
    
            td = document.createElement("td");
            td.setAttribute("id", "idTahun"); //
            td.innerText = array[i].tahun;
            tr.appendChild(td);
    
            td = document.createElement("td");
            td.setAttribute("id", "idJenis"); //
            td.innerText = array[i].jenis;
            tr.appendChild(td);
    
            td = document.createElement("td");
            td.setAttribute("id", "idHasil"); //
            td.innerText = array[i].hasil;
            tr.appendChild(td);
            tbl.appendChild(tr);
        }
    }
}

function Btnshow(){
    fdata(w)
    var w = document.querySelectorAll(
        "#idTahun, #idJenis, #idHasil, #tahun, #jenis, #hasil"
        );
    for (var i = 0; i < w.length; i++) {
        w[i].setAttribute("style", "display:revert;");
    }
}
function Btnclose(){
    var w = document.querySelectorAll(
        "#idTahun, #idJenis, #idHasil, #tahun, #jenis, #hasil"
        );
    for (var i = 0; i < w.length; i++) {
        w[i].setAttribute("style", "display:none;");
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
    var piri = document.querySelectorAll("#idTahun")
        for (var i = 0; i < piri.length; i++) {
            piri[i].setAttribute("style", "display:revert;")
        }
    var high = document.querySelectorAll("#idJenis, #idHasil");
        for (var i = 0; i < high.length; i++) {
            high[i].setAttribute("style", "display:none;");
        }
    document.getElementById("tahun").style.display = "revert";
    document.getElementById("jenis").style.display = "none";
    document.getElementById("hasil").style.display = "none";
}
function jenisData() {
    var piri = document.querySelectorAll("#idJenis");
    for (var i = 0; i < piri.length; i++) {
        piri[i].setAttribute("style", "display:revert;");
    }
    var high = document.querySelectorAll("#idTahun, #idHasil");
    for (var i = 0; i < high.length; i++) {
        high[i].setAttribute("style", "display:none;");
    }
    document.getElementById("tahun").style.display = "none";
    document.getElementById("jenis").style.display = "revert";
    document.getElementById("hasil").style.display = "none";
}
function hasilData() {
    var piri = document.querySelectorAll("#idHasil");
    for (var i = 0; i < piri.length; i++) {
        piri[i].setAttribute("style", "display:revert;");
    }
    var high = document.querySelectorAll("#idTahun, #idJenis");
    for (var i = 0; i < high.length; i++) {
        high[i].setAttribute("style", "display:none;");
    }
    document.getElementById("tahun").style.display = "none";
    document.getElementById("jenis").style.display = "none";
    document.getElementById("hasil").style.display = "revert";
}
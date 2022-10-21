var array = [];

fetch("./uts.json")
    .then(response => response.json())
    .then(data => array = data.tani)
    .catch(error => console.error(error)
)

function tmdata(){
    var tbl,i,tr,td

    tbl = document.getElementById('Mytable')
    if (tbl.childElementCount <= 1) {
        for(i=0; i<array.length; i++){
            tr = document.createElement('tr')
            
            td = document.createElement('td')
            td.setAttribute("id", "tahun")
            td.innerText = array[i].tahun
            tr.appendChild(td)
            tbl.appendChild(tr)

            td = document.createElement('td')
            td.setAttribute("id", "jenis")
            td.innerText = array[i].jenis
            tr.appendChild(td)
            tbl.appendChild(tr)

            td = document.createElement('td')
            td.setAttribute("id", "hasil")
            td.innerText = array[i].hasil
            tr.appendChild(td)
            tbl.appendChild(tr)
        }
    }
}
function btnshow(){
    tmdata(h)
    var h = document.querySelectorAll(
        "#idTahun, #idJenis, #idHasil, #tahun, #jenis, #hasil"
        );
    for (var i = 0; i < h.length; i++) {
        h[i].setAttribute("style", "display:revert;");
    } 
 
}
function btnclose(){
    var q = document.querySelectorAll("#tahun, #jenis, #hasil")
    for(var i=0; i < q.length; i++){
        q[i].setAttribute("style", "display:none")
    }
}
function xfilter(){
    var e = document.querySelectorAll("#idJenis");
    for (var i = 0; i < e.length; i++) {
        var q = document.getElementById('model').value
        e[i].setAttribute("style", "display:revert;");
    }
    document.getElementById("tahun").style.display = "none";
    document.getElementById("jenis").style.display = "none";
    document.getElementById("hasil").style.display = "revert";
}

var array = [];

fetch("./uts.json")
    .then(response => response.json())
    .then(data => array = data.tani)
    .catch(error => console.error(error)
)

function tmdata(){
    var tbl,i,tr,td,dt,a
    tbl = document.getElementById('Mytable')
    if (tbl.childElementCount <= 1) {
        for(i=0; i<array.length; i++){
            tr = document.createElement('tr')
            
            td = document.createElement('td')
            td.innerText = array[i].tahun
            tr.appendChild(td)
            tbl.appendChild(tr)

            td = document.createElement('td')
            td.innerText = array[i].jenis
            tr.appendChild(td)
            tbl.appendChild(tr)

            td = document.createElement('td')
            td.innerText = array[i].hasil
            tr.appendChild(td)
            tbl.appendChild(tr)
        }
    }
}

function dtTahun(){
    
}
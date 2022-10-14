var array = [];

fetch("./uts.json")
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        array = data.tani // tani data dari JSON
        dataFix(); // membuat function baru
    })
    .catch(function (err){
        err = console.error();
        return false;
    })

function dataFix(){
    let tbl     = document.getElementById('tableku')
    let tbody   = document.createElement('tbody')
    for(i = 0; i<array.length; i++){
        let kolom = document.createElement('tr')
        for(let a in array[i]){
            let isi = document.createElement('td')
            let item = document.createTextNode(array[i][a])
            isi.appendChild(item)
            kolom.appendChild(isi)
        }
        tbody.appendChild(kolom)
    }
    tbl.appendChild(tbody)
}

function showData(){
    document.getElementById('tableku').style.display = "table"
}
function closeData(){
    document.getElementById('tableku').style.display = "none"
}

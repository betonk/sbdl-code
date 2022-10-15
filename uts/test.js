var array = [];

fetch("./uts.json")
    .then(response => response.json())
    .then(data => array = data)
    .catch(error => console.error(error)
)

function tmdata(){
    
}

function dt_tahun(){
    var input,fit,tbl,tr,td,i
    input = document.getElementById('model')
    fit = input.value.toUpperCase()
    tbl = document.getElementById('Mytable')
    for(i=0; i<array.length; i++){
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = array[i].tahun
        if(td){
            if(td.innerHTML.toUpperCase().indexOf(fit) > -1){
                tr.style.display = "";
            } else {
                tr.style.display = "none";
            }
        }
        td.appendChild(tr)
        tr.appendChild(tbl)
    }
}
const tambah    = document.querySelectorAll("#tambah");
const simpan    = document.querySelectorAll("#simpan")
const hapus    = document.querySelectorAll("#hapus")
const hasil    = document.querySelectorAll("#hasil")

if(localStorage.getItem('data') === null){
    localStorage.setItem('data', '[]');
}

simpan.onclick = () => {
    var menyimpan = JSON.parse(localStorage.getItem('data'))
    menyimpan.push(tambah.value)

    localStorage.setItem('data', JSON.stringify(menyimpan));
}
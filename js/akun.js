// Manggil Data
let ustampil = localStorage.getItem("datauser"); 
let objekuser = JSON.parse(ustampil);

// Menemukan Lokasi Dengan Variabel Baru
const tampil = document.getElementById("namauser");

for(let i = 0; i < objekuser.length; i++){
    tampil.innerHTML = objekuser[i].nama;
};
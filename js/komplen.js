// Manggil Data
let ustampil = sessionStorage.getItem("keluhan pelanggan"); 
let objekuser = JSON.parse(ustampil);

// Menemukan Lokasi Dengan Variabel Baru
const tampil = document.getElementById("n");
const tampil2 = document.getElementById("e");
const tampil3 = document.getElementById("j");
const tampil4 = document.getElementById("k");
const tampil5 = document.getElementById("jkk");
const tampil6 = document.getElementById("ka");

for(let i = 0; i < objekuser.length; i++){
    tampil.innerHTML = objekuser[i].name;
    tampil2.innerHTML = objekuser[i].email;
    // tampil3.innerHTML = objekuser[i].jenis kelamin;
    // tampil4.innerHTML = objekuser[i].kategori usia;
    tampil6.innerHTML = objekuser[i].keluhan;
};

// let ustampil1 = sessionStorage.getItem("jenis keluhan"); 
// let objekuser1 = JSON.parse(ustampil1);
// for(let i = 0; i < objekuser1.length; i++){
//     tampil5.innerHTML = objekuser1[i].value;
// };

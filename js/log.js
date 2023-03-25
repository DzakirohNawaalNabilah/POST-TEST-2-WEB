// LOGIN
    // Menemukan Lokasi Dengan Variabel Baru
    const email = document.getElementById("Username1");
    const pass = document.getElementById("Password1");

    // Fungsi
    form.addEventListener("submit", function(e){
    e.preventDefault()
    
    // Manggil Data
    let userkey = localStorage.getItem('datauser');
    let objekuser = JSON.parse(userkey);
    
    for(let i = 0; i < objekuser.length; i++){
    if( email.value == objekuser[i].nama && pass.value == objekuser[i].pass){
        alert("Selamat Anda Berhasil Login");
        window.location.href = "user.html";    
    }
    else{
        alert("Email Atau Password Anda Salah!");
    }
    }
});

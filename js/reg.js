// Registrasi
    // Menemukan Lokasi Dengan Variabel Baru
    const daftar = document.getElementById("daftar");
    
    // Button
    daftar.onclick = regis;

    // Fungsi
    function regis(e){
    e.preventDefault();
    alert("Selamat Bergabung Dengan GoToCinema!");
    window.location.href = "log.html";  

    // Mengolah Data
    const nama = document.getElementById("daf_username");
    const pas = document.getElementById("daf_password");
    const akun = [];

    akun.push({
        "nama": nama.value,
        "pass": pas.value
    });
    let string = JSON.stringify(akun);
    localStorage.setItem('datauser', string);    
};

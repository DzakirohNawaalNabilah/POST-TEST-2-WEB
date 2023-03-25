// Keluhan Pelanggan
    // Menemukan Lokasi Dengan Variabel Baru
    const save = document.getElementById("mengeluh");
        
    // Button
    save.onclick = keluhan;
    
    // Fungsi
    function keluhan(e){
        e.preventDefault();
        alert("Keluhan Pelanggan Setia Akan Kami Terima");
        window.location.href = "komplen.html";

    // Mengolah Data
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const jeniskelamin = document.getElementById("gender1", "gender2");
    const kategoriusia = document.getElementById("usia");
    const jeniskeluhan = document.getElementsByName("kel");
    const keluhan = document.getElementById("komplen");
    const kp = [];
    const jk = [];

    kp.push({
        "name": nama.value,
        "email": email.value,
        "jenis kelamin": jeniskelamin.value,
        "kategori usia": kategoriusia.value,
        "keluhan": keluhan.value
    });
    
    let string = JSON.stringify(kp);
    sessionStorage.setItem('keluhan pelanggan', string);
    
    for(let i = 0; i < jeniskeluhan.length; i++){
    if( jeniskeluhan[i].checked == true){
        jk.push(jeniskeluhan[i].value);   
    }
    sessionStorage.setItem('jenis keluhan',jk);
    }
    };

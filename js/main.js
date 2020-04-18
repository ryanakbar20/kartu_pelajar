
var biodata = {
    nama : "Ryan Akbar Ferdiansyah",
    kelas : "XII TKJ 2",
    ttl : "Bekasi, 20 April 2002",
    alamat : "Bandhar Agung Village 2, Jatiasih - Bekasi",
    nohp : "0895330918193",
    email : "ryanakbar0987@gmail.com"
};

function getBiodata(){
    document.getElementById('nama').innerHTML = biodata.nama;
    document.getElementById('kelas').innerHTML = biodata.kelas;
    document.getElementById('ttl').innerHTML = biodata.ttl;
    document.getElementById('alamat').innerHTML = biodata.alamat;
    document.getElementById('nohp').innerHTML = biodata.nohp;
    document.getElementById('email').innerHTML = biodata.email;
}

getBiodata();
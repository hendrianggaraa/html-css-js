// Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Hendri Anggara',
    nrp : '034398438',
    email : 'hendrianggara@gmail.com',
    jurusan : 'Elektronika Instrumentasi'
}

var mhs2 = {
    nama : 'Mikasa',
    nrp : '034398438',
    email : 'mikasa@gmail.com',
    jurusan : 'Teknik Mesin'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nisa', '02329382', 'nisa@gmail.com', 'Teknik Pangan');


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Tejo', '02023092', 'tejo@gmail.com', 'Teknik Elektro');
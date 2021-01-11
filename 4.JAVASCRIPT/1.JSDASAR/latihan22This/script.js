// this
// Object window adalah object global
// Di setiap kita membuat variabel di scope global, nah itu sama aja dia adalah properti atau method dari object window dengan kata lain kita membuat properti atau object bernama window. Karena javascript kingnya adl Object yaitu window === this.
// console.log(window.a);
// console.log(window === this);
// this mengembalikkan object global atau dia otomatis dibuat,
// method adalah funtion yang ada di dalam object
// sedangkan properti adalah variabel di dalam object

//  membuat object

//  cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikkan object Global / Window

// cara 2 - object literal
var obj = {a : 10, nama : 'Hendri'};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}

obj.halo();
// this mengembalikkan object yang bersangkutan

// cara 3 - constructor
function Halo(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    console.log(this);
    // console.log('halo');
}

var obj1 = new Halo("Hendri", 21);
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
// constructor menggunakan new agar dapat mengembalikan nilai yaitu object.
// Kalautidak maka dianggap sama seperti function declaration dan butuh var dan return object.


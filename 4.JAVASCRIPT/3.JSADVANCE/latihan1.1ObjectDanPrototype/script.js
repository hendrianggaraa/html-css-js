// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//     nama: 'Hendri',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Dinda',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }


// 2.Function Declaration

// Supaya ketika dipanggil oleh function Mahasiswa hanya dibuat satu kali di dalam memori

// PROBLEM harus mengelola 2 objek yaitu objek literal dan objek function declaration yang saling terhubung.
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     // let mahasiswa = {};
//     // Dengan menggunakan Object.create kita dapat langsung ngasih tahu parrent dari objeknya atau objek yang terhubung dengan objek Mahasiswa (atau dengan kata lain disebut pewarisan)
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     /* Dengan menggunakan Object.create maka tidak perlu lg mendaftarkan method-methodnya */
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     /* Sintaks yang ini jika diaktifkan dia akan membuat dirinya berkali-kali di dalam memori sesuai dengan JUMLAH INSTANSIASI */
//     // mahasiswa.makan = function (porsi) {
//     //     this.energi += porsi;
//     //     console.log(`Halo ${this.nama}, selamat makan!`);
//     // }

//     // mahasiswa.main = function (jam) {
//     //     this.energi -= jam;
//     //     console.log(`Halo ${this.nama}, selamat bermain!`);
//     // }

//     return mahasiswa;
// }

// let hendri = Mahasiswa('Hendri', 10);
// let dinda = Mahasiswa('Dinda', 20);


// 3.1 Constructor function
// keyword new
/* function Mahasiswa(nama, energi) {
    // let mahasiswa = {};
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
    // return mahasiswa;
} */

// let hendri = new Mahasiswa('Hendri', 10);


// 3.2 Constructor function
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = {};
//     // Dengan menggunakan Object.create kita dapat langsung ngasih tahu parrent dari objeknya atau objek yang terhubung dengan objek Mahasiswa (atau dengan kata lain disebut pewarisan)
//     // let mahasiswa = Object.create(methodMahasiswa);

//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
//     // return this;
// }

// // Sudah nempel ke objek yang dibikin sebelumnya (function Mahasiswa)
// // Konsep pewarisan di Javascript menggunakan prototype inheritance
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let hendri = new Mahasiswa('Hendri', 10);

// Versi CLass
// Dibelakang layar yg dijalanin adalah prototype
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }


//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let hendri = new Mahasiswa('hendri', 10);
// let dinda = new Mahasiswa('dinda', 20);

// let angka = [];
// Dibelakang layar
// let angka = new Array();

// function Array() {
//     let this = Object.create(Array.prototype);
// }

let angka = [3, 1, 2];
// console.log(angka.sort());
console.log(angka);

// proto berisi method-method
// Array.prototype = method apa saja yang digunakan.

// Menggunakan prototype lebih hemat memori dikarenakan function sudah ada di dalam __proto__ dimana setiap objek yang dibuat pasti memilih __proto__. 
// Kalau menggunakan this dia akan dibuat lagi __proto__nya atau objeknya
// f.__proto__ === f.prototype --> False
// (new f()).__proto__ === f.prototype --> True

// https://medium.com/koding-kala-weekend/memahami-javascript-sebagai-prototype-based-language-4ea7d18590e7#:~:text=Secara%20sederhana%2C%20semua%20function%20di,akan%20dipanggil%20di%20masa%20depan.


// 4. Object.create
// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Hendri';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const hendri = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Hendri';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         // console.log(this);
//     }
// }

// const hendri = new Mahasiswa();

// Object literal -> Arrow function tidak memiliki konsep this
// const mhs1 = {
//     nama: 'Hendri',
//     umur: 21,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     }
// }


// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Hendri';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     // setInterval(function () {
//     //     // console.log(this.umur++);
//     //     // cari thisnya bukan di Mahasiswa tp di scope global, jd gak ketemu
//     //     console.log(this.umur);
//     // }, 500);


//     // Beda ketika menggunakan Arrow Function, dia akan mencari ke lexical scopenya
//     setInterval(() => {
//         // console.log(this.umur++);
//         // cari thisnya bukan di Mahasiswa tp di scope global, jd gak ketemu
//         console.log(this.umur++);
//     }, 500);
// }

// const hendri = new Mahasiswa();



// Contoh Kasus
const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     console.log(this);
// });

// box.addEventListener('click', () => {
//     console.log(this);
// });

// box.addEventListener('click', function () {
//     let that = this;
//     this.classList.toggle('size');
//     setTimeout(function () {
//         // this.classList.toggle('caption');
//         console.log(that);
//         // this.classList.toggle('caption');
//     }, 600)
// });


box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        // this.classList.toggle('caption');
        // console.log(that);
        this.classList.toggle(dua);
    }, 600)
});
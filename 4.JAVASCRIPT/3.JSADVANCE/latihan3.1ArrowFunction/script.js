// Bentuk lain yang lebih ringkas dari Function Expression
// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Hendri'));


// Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Hendri'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Erik', 'Malam'));

// Kalau parameternya hanya satu tidak perlu pake kurung
// Implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Erik'));


// Tanpa parameter wajib () -> eksekusi function
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());


let mahasiswa = ['Hendri', 'Fajar', 'Dinda Arial'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// // Menjadikan objek bukan array
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// // console.log(jumlahHuruf);
// console.table(jumlahHuruf);

// Kalau property dan nilainya cukup tulis satu aja 
let jumlahHuruf = mahasiswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);
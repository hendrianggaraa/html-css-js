// Kenapa menggunakan Closure?
// 1. Untuk membuat Function Factories -> Membuat function sesuai fuction yg lain
// 2. Untuk membuat private method

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Hendri');
// selamatMalam('Galih');

// console.dir(selamatMalam('Hendri'));

// Private Method
// let add = (function () {
//     let counter = 0;
//     // return ++counter;
//     return function () {
//         return ++counter;
//     }
// })();

// counter = 100;

// // let a = add()

// console.log(add());
// console.log(add());
// console.log(add());
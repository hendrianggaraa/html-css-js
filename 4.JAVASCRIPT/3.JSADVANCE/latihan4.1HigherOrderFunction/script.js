// Higher Order Function
// Function yang beroperasi pada function yang lain.
// Baik itu digunakan dalam argument, maupun sebagai return value
// First Class Function
// Karena javascript memperlakukan function sebagai object
// Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya
// Ada dua cara untuk merancang sebuah software. Cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas.

// Contoh Higher Order Function
// Function yang kita simpan sebagai argumen disebut callback
// sedangkan function yang memiliki callback sebagai argumennya disebut higher order function
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
    selesai();
}

function selesai() {
    alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web', selesai);

setTimeout(function () {
    console.log('Hello World');
}, 1000);

const tombol = document.querySelector('.submit');
tombol.addEventListener('click', function () {
    console.log('tombol ditekan!');
});

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatMalam = ucapkanSalam('Malam');
console.dir(selamatMalam('Hendri'));

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
// }

// repeatLog(10);

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(10, console.log);
// repeat(3, alert);

// Contoh Higher Order function 2
// 1. Array.prototype.map()
// 2. Array.prototype.filter()
// 3. Array.prototype.reduce()
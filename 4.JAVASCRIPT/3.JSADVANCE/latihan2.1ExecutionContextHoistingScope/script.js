// Tools Bantuan Untuk Melihat Cara Kerja Urutan Eksekusi Visual JS
// http://pythontutor.com/javascript.html

// Execution Context -> Saat program dijalankan
// 1. Creation
// 2. Execution

// Pertama diisi oleh undefined terlebih dahulu
// var nama = 'Hendri';
// console.log(nama);


// Sudah terlanjur diconsole log jadi isi var nama nya = undefined, baru setelah itu isi var nama nya = 'hendri'
// console.log(nama);
// var nama = 'Hendri';

// ++ Creation phase pada Global Context ++
// Javascript akan mengecek dulu, apakah ada variabel atau functionnya gak? tanpa javascript memperdulikan perintah consolenya terlebih dahulu.
// Kalau ada nama variabelnya akan di set terlebih dahulu ke undefined
// nama var = undefined
// nama function = fn() -> tidak dijalankan functionnya
// Kemudian dinaikkan ke atas.
// Konsep ini disebut dengan hoisting seperti mengerek bendera ke atas
// Ada lagi yang di definisikan
// Javascript mendefinisikan windows dan this
// windows = global object
// this = window
// Kedua hal itu ada meskipun file jsnya kosongan.

// ++ Execution phase ++
// Mengeksekusi program baris perbaris dari atas ke bawah




// Dihoisting
// var nama = undefined
// var umur = undefined
// sayHello() --> function sayHello() {
//     console.log(`Helo, nama saya ${nama}, umur saya ${umur} tahun.`);
// }

// console.log(sayHello());
// var nama = 'hendri';
// var umur = 21;

// console.log(sayHello());
// function sayHello() {
//     return `Helo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// Dilanjutkan di BARIS 104
// Mengembalikan nilai undefined ketika dieksekusi()
// function sayHello() {}

// // Eksekusi 1
// var nama = 'hendri';
// // Eksekusi 2
// var username = '@hendrizte';

// // Eksekusi 4 Hoisting
// // Terjadi Local Execution Context
// // username dan instagramURL akan dihoisting terlebih dahulu
// // username = @hendrizte
// // instagramURL = undefined
// // Istilahnya menambahkan execution stack atau tumpukan eksekusi
// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     // Direturn -> sudah ada nilai di memori tp belum dicetak atau dikembalikan.
//     return instagramURL + username;
// }

// // Eksekusi 3 -> Memanggil fungsi
// // Eksekusi 4 -> Cetak nilai return dari function
// // Tumpukan eksekusinya dihilangkan dari memori setelah dicetak.
// console.log(cetakURL(username));


// Tumpukan eksekusi
// function a() {
//     console.log('ini a');
//         function b() {
//             console.log('ini b');
//             function c() {
//                 console.log('ini c');
//             }

//             c();

//         }

//     b();

// }

// a();



// // Lanjutan yang baris 55
// var nama = 'hendri';
// var username = '@hendrizte';

// // Scope dari argument ke username
// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@firhanansyah'));

// var nama = 'hendri';
// var username = '@hendrizte';

// // Scope dari argument ke username
// function cetakURL(username) {
//     // cari di local scope apakah variabel username ada, kalau gak ada cari di parameternya, kalau gak ada cari scope globalnya. Dan kalau gak ada lagi baru error.
//     // Ketika di hoisting username sudah berisi nilai arguments dan kemudian baru ditimpa. InstagramURL nilainya undefined.
//     var username = '@afro';
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@firhanansyah'));



// var nama = 'hendri';
// var username = '@hendrizte';

// // 1. Cari di scope lokal apakah ada variabelnya.
// // 2. Kalau tidak cari di parameternya
// // 3. Dan kalau tidak lg cari di scope globalnya
// // 4. Dan jika masih tidak ada tampilkan error
// function cetakURL() {
//     console.log(arguments[1]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// // argumennya masuk ke dalam objek arguments
// console.log(cetakURL('@firhanansyah', '@erik'));


// undefined
// hendri
// dinda
// dinda
// Latihan
function satu() {
    var nama = 'Hendri';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Dinda';
satu();
dua('Kora');
console.log(nama);
// Callback
// Function yang dikirimkan sebagai parameter pada function yang lain.
// Function yang dieksekusi setelah fungsi lain selesai dijalankan.

// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// // Function tampilkanPesan mengirim fuction halo sebagai argumen
// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Synchronous Callback
// const mhs = [
//     {
//         "nama": "Muhammad Fikri",
//         "nrp": "384938493439483",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Fiersa Besari",
//         "nrp": "424932321439483",
//         "jurusan": "Teknik Nuklir",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Hendri Anggara",
//         "nrp": "23238493439483",
//         "jurusan": "Elektronika Instrumentasi",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     // Dibuat seolah-olah load datanya lama
//     for(let i = 0; i < 10000000; i++) {
//         let data = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai')

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if( xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if (xhr.status === 400) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');


// Dengan JQuery
// $.getJSON('data/mahasiswa.json', data => console.log(data));

console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: mhs => {
        mhs.forEach(m => console.log(m.nama));
        // console.log(mhs);
    },
    error: e => {
        console.log(e.responseText); 
    }
});
console.log('selesai');
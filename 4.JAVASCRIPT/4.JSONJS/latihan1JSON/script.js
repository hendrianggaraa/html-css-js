/* var mahasiswa = {
    nama: 'Hendri Anggara',
    nrp: '032093023828',
    email: 'hendrianggara@gmail.com'
}

// Mengubah objek menjadi JSON
console.log(JSON.stringify(mahasiswa)); */

// Mengubah JSON menjadi Objek menggunakan XMLHttpRequest (Vanila JS)
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// // Menjalankan AJAX
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// Dengan JQuery
// $.getJSON('coba.json', function(data) {
//     console.log(data);
// });
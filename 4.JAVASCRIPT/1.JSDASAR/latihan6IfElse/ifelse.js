/* 

if (kondisi) {
    aksi --> lakukan aksi jika kondisi true
} 
keluar dari blok jika kondisi bernilai false 

*/

/* 

if (kondisi) {
    aksi 1 --> lakukan aksi 1 jika kondisi true
} else {
    aksi 2 --> lakukan aksi 2 jika kondisi false
}

} */

/* var jmlBis = 10;
var bisBeroperasi = 6;

for (var noBis = 1; noBis <= jmlBis; noBis++) {
    if (noBis <= bisBeroperasi) {
        console.log('Bis No. ' + noBis + ' beroperasi dengan baik.');
    } else {
        console.log('Bis No. ' + noBis + ' sedang tidak beroperasi.');
    }
} */


var angka = prompt('Masukan angka: ');

if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
} else {
    alert(angka + ' adalah bilangan GANJIL');
}
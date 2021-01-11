/* 

if (kondisi) {
    aksi 1 --> lakukan aksi 1 jika kondisi true
} else if(kondisi 2) {
    aksi 2
} else {
    aksi 2 --> lakukan aksi 2 jika kondisi false
}

} */

/* var angka = prompt('Masukan angka: ');

if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
} else if(angka % 2 == 1 ) {
    alert(angka + ' adalah bilangan GANJIL');
} else {
    alert('yang anda masukkan bukan angka !!!');
} */

var jmlBis = 10;
var bisBeroperasi = 6;

for(var noBis = 1; noBis <= jmlBis; noBis++) {
    
    if(noBis <= bisBeroperasi) {
        console.log('Bis No. ' + noBis + ' beroperasi dengan baik.');
    } else if (noBis === 8) {
        console.log('Bis No. ' + noBis + ' sedang lembur.');
    } else {
        console.log('Bis No. ' + noBis + ' sedang tidak beroperasi');
    }
    
}
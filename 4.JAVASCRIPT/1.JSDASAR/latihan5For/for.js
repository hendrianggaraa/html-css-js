/* for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log('hello world');
} */

/* for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log('Hello World ' + nilaiAwal + 'x');
} */

var jmlBis = 10;
var bisBeroperasi = 6;
var noBis = 1;

while (noBis <= bisBeroperasi) {
    console.log('Bis No. ' + noBis + ' beroperasi dengan baik.');
    noBis++;
}

for(noBis = bisBeroperasi + 1; noBis <= jmlBis; noBis++) {
    console.log('Bis No. ' + noBis + ' sedang tidak beroperasi.');
}
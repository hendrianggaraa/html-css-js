/* var jmlBis = 10;
var bisBeroperasi = 6;

for(var noBis = 1; noBis <= jmlBis; noBis++) {
    
    if(noBis <= bisBeroperasi) {
        console.log('Bis No. ' + noBis + ' beroperasi dengan baik.');
    } else if (noBis === 8 || noBis === 10) {
        console.log('Bis No. ' + noBis + ' sedang lembur.');
    } else {
        console.log('Bis No. ' + noBis + ' sedang tidak beroperasi');
    }
    
}
 */

var jmlBis = 10;
var bisBeroperasi = 6;

for(var noBis = 1; noBis <= jmlBis; noBis++) {
    
    if(noBis <= bisBeroperasi && noBis !== 5) {
        console.log('Bis No. ' + noBis + ' beroperasi dengan baik.');
    } else if (noBis === 5 || noBis === 8 || noBis === 10) {
        console.log('Bis No. ' + noBis + ' sedang lembur.');
    } else {
        console.log('Bis No. ' + noBis + ' sedang tidak beroperasi');
    }
    
}
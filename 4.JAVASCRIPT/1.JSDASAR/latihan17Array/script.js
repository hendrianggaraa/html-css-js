// Mnipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr[1]);


/* var arr = [];
arr[0] = "Hendri";
arr[1] = "Anggara";
arr[2] = "Novi";
arr[6] = "Ilham";

console.log(arr); */

// 2. Menghapus isi array
var arr = ["Hendri", "Anggara", "Novi"];
arr[1] = undefined;
console.log(arr);


// 3. Menampilkan isi array
/* var arr = ["Hendri", "Anggara", "Novi"]; //"Sofi"];

for( var i = 0; i < arr.length; i++) {
    console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
} */



// Method pada array
// var arr = ['Hendri', 'Anggara', 'Novi', 'Malih', 'Novi'];
//  1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Malih', 'Surya');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Malih');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Malih', 'Sofi');
// arr.splice(1, 1, 'Firhan', 'Fitri');
// console.log(arr.join(' - '));

// 5. slice
// Menghasilkan array baru
// slice(awal, akhir);
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Hendri', 'Anggara', 'Novi', 'Malih', 'Novi'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

/* var cetak = function(a) {
    console.log(a)
}
angka.forEach(cetak);
*/
/* angka.forEach(function(a) {
    console.log(a);
}); */

/* nama.forEach(function(value, index) {
    console.log('Mahasiswa ke-' + (index + 1) + ' adalah: ' + value);
}) */


// 7. map
// Mengembalikan nilai array
/* var angka = [1, 2, 5, 3, 6, 8, 4];
var angka2 = angka.map(function(e) {
    return e * 2;
});
console.log(angka2.join(' - ')) */

// 8. sort
/* var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
console.log(angka.join(' - '));
angka.sort(function(a, b) {
    return a - b;
});
console.log(angka.join(' - ')); */

// 9. filter
// Mengembalikan banyak nilai
/* var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join(' - ')); */

// 9. find
// Tidak menghilkan array
// Mengembalikan satu nilai
/* var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);
 */
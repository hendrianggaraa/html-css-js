//  Semua looping bisa dibuat rekursif, tapi tidak sebaliknya
// Base Case = Kondisi akhir dari rekursif yang menghasilkan nilai

/* 
Implementasi Rekursif :
Menggantikan looping
Fibonacci
Pencarian dan penelusuran pada struktur data list dan tree
Bahasa pemrograman yang tidak memiliki pengualangn
 - Haskel, Erlang, Prolog, dll
*/

/* function tampilAngka(n) {
    if( n === 0 ) return;
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10); */

// Menggunakan Looping
/* function faktorial(n) {
    var hasil = 1;
    for(var i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
} */

function faktorial(n) {
    if( n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));

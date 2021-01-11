// globa scope / windows scope
// var a = 1;

// Jika ingin membuat variabel lokal, jangan lupa var.
// "use strict";

var a = 1;
function tes(a) {
    // local scope
    // var b = 2;
    // console.log(a);

    // nama conflict
    /* var a = 2;
    console.log(window.a); */

    // Mengecek keluar ada varnya gak?
    // a = 2;
    
    console.log(a);
}

tes(a);
console.log(a);
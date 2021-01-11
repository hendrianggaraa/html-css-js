/* 
    Function Declaration:
    1. Lebih fleksibel (dapat ditulis dimanapun)
       - karena konsep Hoisting
    2. Mudah dipahami pemula
*/

/* 
    Function Expression
    1. Harus didefinisian terlebih dahulu sebelum dipanggil.
    2. Lebih powerfull :
       Sebagai closure
       Sebagai argumen untuk function lain
       IIFE (Immediately Invoked Function Expression)
*/

// alert(jumlahVolumeDuaKubus(8, 3));
/* function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
} */

var jumlahVolumeDuaKubus = function (a, b) {
    return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));
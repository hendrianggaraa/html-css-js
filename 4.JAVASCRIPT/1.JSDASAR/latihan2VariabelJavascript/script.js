/* var x = 10;
console.log('Hello World!');
console.log('isi dari variable x adalah ' + x); */


// Hoisting -> Mengerek
// var i;
// console.log(i);
// i = 10;
// var i = 10;

// Javascript menganut function scope bukan block scope
/* for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); */

/* function tes() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
tes();
console.log(i); */

// IIFE -> Immediately Invoked Function Expression
// SIAF -> Self Invoking Anonymous Function
/* (function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}());
console.log(i); */

/* for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); */

// Gunakan let hanya ketika bikin for
// const i = 10;
// i = 15;

// Constanta tidak sepenuhnya tdk bisa diganti dengan catatan
/* const mhs = {
    nama: "Hendri",
    umur: "21"
}

mhs.umur = 22;
console.log(mhs); */

const i = [1, 2, 3];
// i = [1, 2, 3, 4];
i.push(4);

console.log(i);
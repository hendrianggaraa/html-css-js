// // https://medium.com/@adhywiranata/bermain-scope-di-javascript-d954e07d05ae

// // ini adalah global scope secara default
// var kelereng = 'merah';

// function mainKelereng() {
//     // ini adalah local scope di dalam function
//     var kelereng = 'hijau';
//     console.log(kelereng); // 'hijau'

//     if (true) {
//         // kita tidak bisa mendeklarasikan ulang kelereng
//         // untuk block statement karena masih dianggap
//         // di dalam scope yang sama dengan function mainKelereng
//         kelereng = 'biru';
//         console.log(kelereng); // 'biru'
//     }

//     console.log(kelereng); // 'biru'
// }

// mainKelereng();

// console.log(kelereng); // 'merah'


// var kelereng = 'merah';

// function mainKelerengSatu() {
//     var kelereng = 'hijau';
//     console.log(kelereng);

//     function kelerengMainDua() {
//         console.log(kelereng);
//     }
//     kelerengMainDua();
// }

// mainKelerengSatu();

// console.log(kelereng); // 'merah'




// ini adalah global scope secara default
var kelereng = 'merah';

function mainKelereng() {
    // ini adalah local scope di dalam function
    var kelereng = 'hijau';
    console.log(kelereng); // 'hijau'

    if (true) {
        // kelereng di dalam block statement if merupakan variable di dalam
        // block scope yang berbeda dengan variable kelereng di function mainKelereng
        let kelereng = 'biru';
        console.log(kelereng); // 'biru'
    }

    // variable kelereng di local scope 
    console.log(kelereng); // 'hijau'
}

mainKelereng();

console.log(kelereng); // 'merah'
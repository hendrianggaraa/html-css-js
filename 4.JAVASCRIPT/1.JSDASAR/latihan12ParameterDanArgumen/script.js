function tambah(a, b) {
    return a + b;
}

// var a = parseInt(prompt('Masukan nilai 1: '));
// var b = parseInt(prompt('Masukan nilai 2: '));
// var hasil = tambah(a*2, b*2);

function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1, 2, 5), tambah(3, 4));
console.log(hasil);

function bagi() {
    return arguments;
}

var coba = bagi(5, 10, 20, 'hi', false);
console.log(coba);

function add() {
    var hasil2 = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil2 += arguments[i];
    }
    return hasil2;
}

var coba2 = add(1, 2, 3, 4, 5);
console.log(coba2);
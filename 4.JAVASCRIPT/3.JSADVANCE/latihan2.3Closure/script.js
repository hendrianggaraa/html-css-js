function init() {
    // let nama = 'Hendri';
    // let umur = 33;

    return function (nama) {
        console.log(nama);
        // jika dibutuhkan akan masuk ke closure
        // console.log(umur);
    }
    // console.dir(tampilNama);
    // return tampilNama;
}

// init();
let panggilNama = init();
panggilNama('Hendri');
panggilNama('Dinda');
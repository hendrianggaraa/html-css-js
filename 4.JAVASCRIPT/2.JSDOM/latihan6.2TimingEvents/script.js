// Merupakan event dari objek window
// setTimeOut() -> akan menjalankan program setelah menunggu beberapa waktu yg diset kedalam parameter
// setInterval()

// const tes = setTimeout(function () {
//     console.log('ok');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearTimeout(tes);
//     console.log('selesai');
// });

// setInterval()
// const tes = setInterval(function () {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearInterval(tes);
//     console.log('selesai');
// });



// Program Hitung Mundur
const tanggalTujuan = new Date('Dec 13, 2020 03:26:00').getTime();


const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.round(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    // console.log(sekarang);
    // console.log(tanggalTujuan);
    // console.log(selisih);
    // console.log(hari);
    // console.log(jam);
    // console.log(menit);
    // console.log(detik);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    if (selisih < 0) {
        clearInterval(hitungMundur);
        teks.innerHTML = 'Waktu Anda Sudah Habis!';
    }
}, 1000);
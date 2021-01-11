// for..of -> Creates a loop iterating over iterable object
// 1.String
// 2.Array
// 3.Arguments / NodeList
// 4.Typed Array
// 5.Map
// 6.Set
// 7.User-defined iterables

// for..of
// const mhs = ['Hendri', 'Maryam', 'Terisa'];

// for( let i = 0; i < mhs.length; i++ ) {
//     console.log(mhs[i]);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// for( const m of mhs ) {
//     console.log(m);
// }

// Melooping String
// const nama = 'Hendri';
// for( const n of nama ) {
//     console.log(n);
// }

// nama.forEach(n => console.log(n));


// NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));
// for( n of liNama ) {
//     console.log(n.innerHTML);
// }

// arguments
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// function jumlahkanAngka() {
//     // return arguments.reduce((a, i) => a + i);
    
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
    
//     // let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);
//     // return jumlah;

//     // let jumlah = 0;
//     // [1, 2, 3].forEach(a => jumlah += a);
//     // return jumlah;

//     let jumlah = 0;
//     for ( a of arguments ) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
// Creates a loop only iterating over enumerable
const mhs = {
    nama: 'Hendri',
    umur: 21,
    email: 'hendrianggara@gmail.com'
}

for (m in mhs) {
    // value
    // console.log(mhs[m]);
    // property
    console.log(m);
}
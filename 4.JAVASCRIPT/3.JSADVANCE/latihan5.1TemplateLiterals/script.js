// Template Literal
// 1. Menggunakan ` ` back tick
// 2. Multi-line String
// 3. Embedded Expression
// 4. HTML Fragments
// 5. Expression Interpolation
// 6. Tagged Template

const nama = 'Hendri';
const umur = 33;
// Dengan template literal
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// Tanpa template literal
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
// const mhs = {
//     nama: 'Hendri Anggara',
//     umur: 33,
//     nrp: '84389473984',
//     email: 'hendrianggara@mail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);
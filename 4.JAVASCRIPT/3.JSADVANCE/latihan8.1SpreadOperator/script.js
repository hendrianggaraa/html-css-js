// Spread Operator
// Memecah (expand / unpack) iterables menjadi single element.

// Iterable Object
// 1. String
// 2. Array
// 3. Arguments / NodeList
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined Iterables

// const mhs = ['Hendri', 'Maria', 'Terisa'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Hendri', 'Maria', 'Terisa'];
// const dosen = ['Aries', 'Tuti', 'Prima'];
// const orang = [...mhs, 'Aji', ...dosen];
// // const orang = [mhs, dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);


// Mengcopy array
// const mhs = ['Hendri', 'Maria', 'Terisa'];
// // Tidak bisa hanya membuat referencenya
// // mhs1[0] = 'Fajar';
// // const mhs1 = mhs;

// // Caranya
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);


// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(huruf);
nama.innerHTML = huruf;
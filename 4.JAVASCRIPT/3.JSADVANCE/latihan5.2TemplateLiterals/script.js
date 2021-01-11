// 1. HTML Fragments
// const mhs = {
//     nama: 'Hendri Anggara',
//     umur: 21,
//     nrp: '7847383242',
//     email: 'hendri@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);



// 2. Looping
// const mhs = [{
//         nama: 'Hendri',
//         email: 'hendri@gmail.com'
//     },
//     {
//         nama: 'Ayass',
//         email: 'ayyas@gmail.com'
//     },
//     {
//         nama: 'Maria',
//         email: 'maria@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// document.body.innerHTML = el;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Hendri Anggara',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`)}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>Nama: ${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;
// Tagged Templates: Bentuk yang lebih kompleks dari Template Literals, memungkinan kita untuk membaca template literals melalui sebuah function
// Kegunaan Tagged Template
// 1.Escaping HTML Tags atau Sanitasi HTML Tags
// 2.Translation & Internationalization untuk alih bahasa
// 3.Styled Components -> Pakai vue atau react


// const nama = 'Hendri Anggara';
// const umur = 33;

// // rest parameter(...) -> menampung seluruh expression yg ada di template literalnya
// // strings -> menampilkan string biasa
// function coba(strings, ...args) {
//     // let result = '';
//     // strings.forEach((string, i) => {
//     //     result += `${string}${args[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((result, string, i) => `${result}${string}${args[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Contoh Implementasi Sederhana
// Highlight
// const nama = 'Hendri Anggara';
// const umur = 33;
// const email = 'hendrianggara@gmail.com';

// function highlight(strings, ...args) {
//     return strings.reduce((result, string, i) => `${result}${string}<span class="hl">${args[i] || ''}</span>`, '');
// }

// const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
// console.log(str);

// document.body.innerHTML = str;



// Escaping / Sanitize HTML Tags
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'Hendri Anggara';
// const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize `
//     <h3>${name}</h3>
//     <p>${aboutMe}</p>
// `;

// console.log(html);
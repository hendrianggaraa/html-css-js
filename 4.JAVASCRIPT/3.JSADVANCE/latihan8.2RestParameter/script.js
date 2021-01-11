// Rest Parameter
// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return arguments;
//     // return Array.from(arguments);
//     return[...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// array destructuring
// const kelompok1 = ['Hendri', 'Aziz', 'Hanif', 'Zulkifli', 'Dicky'];
// // const ketua = kelompok1[0];
// const [ketua, wakil, ...anggota] = kelompok1;
// // console.log(ketua);
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Hendri',
//     frontEnd1: 'Mamat',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Zulkifli',
//     devOps: 'Maria'
// }

// const {pm, ...myTeam} = team;
// // console.log(pm);
// console.log(myTeam);


// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

// console.log(filterBy('number', 1, 2, 'Hendri', false, 10, true, 'Sita'));
// console.log(filterBy('string', 1, 2, 'Hendri', false, 10, true, 'Sita'));
console.log(filterBy('boolean', 1, 2, 'Hendri', false, 10, true, 'Sita'));
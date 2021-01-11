const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari numbers >= 3
// for 

// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 3) {
//         newAngka.push(numbers[i]);
//     }
// }

// console.log(newNumbers);

// filter
// const newNumbers = numbers.filter(number => number >= 3);
// console.log(newNumbers);

// map
// kalikan semua angka dengan 2
// const newNumbers = numbers.map(number => number * 2);
// console.log(newNumbers);

// reduce
// jumlahkan seluruh elemen pada array
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9;
// const newNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newNumbers);


// Method chaining
// Cari angka > 5
// Kalikan 3
// jumlahkan
const result = numbers.filter(number => number > 5) // 8, 9, 9
    .map(number => number * 3) // 24, 27, 27
    // .map(number => number / 2) // 12, 13.5, 13.5
    .reduce((acc, cur) => acc + cur); //78
console.log(result);
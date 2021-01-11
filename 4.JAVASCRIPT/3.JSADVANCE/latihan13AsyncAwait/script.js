// Asynchronous Function
/* Sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang synchronous (standard). */

// Asynchronous Function
// 1.Fungsi yang berjalan secara asynchronous
// 2.Menghasilkan (implisit) promise
// 3.Cara penulisannya sama seperti synchronous function (function biasa)

// Asyncronous function
// Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai.

// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });

// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

async function cobaAsync() {
    // try untuk resolve dan catch untuk reject
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (e) {
        // console.log(e);
        console.error(e);
    }
}

cobaAsync();
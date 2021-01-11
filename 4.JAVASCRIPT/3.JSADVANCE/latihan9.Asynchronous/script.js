// Asynchronous Javascript
// 1. Callback
// 2. Promise
// 3. ajax
// 4. Async & Await

// Javascript
// is a single-threaded, non-blocking, asynchronous and concurrent language

// single-threaded
// Thread -> Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain

// Single-threaded Javascript hanya dapat mengeksekusi perintah baris perbaris
// Multi threaded -> threadnya dapat banyak, meskipun tasknya tetap dikerjakan satu-satu tetapi dapat dikerjakan oleh banyak tread yang berbeda.

// Blocking -> Kalau taks 1 belum selesai maka harus menunggu untuk task berikutnya.
// Non-Blocking -> Kalau task 1 belum selesai maka bisa lanjut ke task berikutnya.

// Synchronous -> Seperti single threaded
// Asynchronous(single-threaded) -> tasknya dapat berpindah-pindah walaupun tasknya belum selesai dikerjakan. 
// Asynchronous(multi-threaded) -> Dapat mengerjakan task di banyak thread secara bersamaan dalam satu waktu tertentu.

// Asynchronous + Single-threaded = Concurrency
// Asynchronous + Multi-threaded = Parallelism

// *** Kesimpulan ***
// 1. Single vs Multi Thread
// Lingkungan eksekusi 'task'
// 2. Blocking vs Non-blocking
// Teknik 'ngoding' (10 related)
// 3. Synchronous vs Asynchronous
// Teknik 'ngoding' (HTTP Request related)
// 4. Concurrent vs Parallel
// Lingkungan eksekusi 'task'

// Javascript -> V8 Engine
// V8 -> Heap dan Stack
// Heap -> Memory Allocation
// Stack -> Function Call & Execution Context

// Contoh Callback Asynchronous -> Terjadi Karena Event Loop
console.log('satu');
setTimeout(() => {
    console.log('dua');
}, 5000);
console.log('tiga');

// Arsitektur Browser
// V8 -> Web API -> Event Loop (Callback Queue)
// Web API menangani Asynchronous Callback yg bukan merupakan bagian dari v8
// 1. DOM
// 2. ajax (XMLHttpRequest)
// 3. setTimeout
// 4. setinterval, etc

// Event Loop mengecek di Callback Queue ada antrian tidak, kalau ada masukkan ke stack (v8), jika di stacknya sudah tidak ada lg tumpukan perintah yg akan dieksekusi.
// don't block the event loop!
// Refactoring --> sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya
/* 
Readability
DRY (Don't Repeat Yourself)
Testability
Performance
Maintainability
*/

// refactoring sederhana

// alert(jumlahVolumeDuaKubus(8, 3));
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8, 3));
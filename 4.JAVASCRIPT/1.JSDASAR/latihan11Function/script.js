function jmlVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

// console.log(jmlVolumeDuaKubus(8, 3));
alert(jmlVolumeDuaKubus(8, 3));
alert(jmlVolumeDuaKubus(10, 15));


/* var vKubus = function(s) {
    return s * s * s;
};    

var tanya = true;

while(tanya) {
    var sisi = prompt('Hitung Volume Kubus\nMasukkan nilai sisinya: ')
    alert('Nilai volume kubusnya: ' + vKubus(sisi));
    tanya = confirm('Lagi?');
} */
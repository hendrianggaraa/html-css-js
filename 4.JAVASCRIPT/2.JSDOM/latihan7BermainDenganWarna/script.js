const tUbahWarna = document.getElementById('tUbahWarna');
// const body = document.getElementsByTagName('body')[0];
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
// tUbahWarna.after(tAcakWarna);
tUbahWarna.after(tAcakWarna);
// tUbahWarna.appendChild(tAcakWarna);

// callback
tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sHijau.addEventListener('input', function() {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function() {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
    // posisi mouse atau kursor
    // console.log(event.clientY);
    // ukuran browser
    // console.log(window.innerWidth);
    // posisi kursor terhadap sumbu X dibagi lebar dari browsernya
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
});
// document.getElementById() -> Element
// document.getElementsByTagName -> HTMLCollections
// document.gerElementsByClassName() -> HTMLCollections

// DOM Selection
// document.getElementById() -> mengembalikkan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Hendri Anggara';

// document.getElementsByTagName()
// Mengembalikkan HTMLCollections
const p = document.getElementsByTagName('p');
/* p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'lightblue';
p[3].style.backgroundColor = 'lightblue'; */

for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// const h1 = document.getElementsByTagName('h1');
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.gerElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
// p1[0].innerHTML = 'Ini diubah dari javascript';
p1.innerHTML = 'Ini diubah dari javascript';
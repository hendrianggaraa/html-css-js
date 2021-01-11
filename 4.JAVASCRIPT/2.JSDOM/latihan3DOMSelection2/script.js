// document.querySelector -> Element
// document.querySelectorAll -> NodeList


// document.querySelector -> Menghasilkan elemet
/* const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'; */

/* const p = document.querySelector('p');
p.innerHTML = 'Ini diubah melalui javascript'; */


// document.querySelectorAll() -> Nodelist
/* const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
} */


// mengubah node root
/* const p4 = document.querySelectorAll('p');
p4[3].style.backgroundColor = 'lightblue'; */

// Dapat mempersempit pencarian di section dgn id='b'
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';
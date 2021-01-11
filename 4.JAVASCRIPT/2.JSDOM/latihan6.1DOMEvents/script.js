// Cara 'mendengarkan' event

/* 
1. Event Handler
    - Inline HTML attribute
    - Element method
2. addEventListener()
 */

/* const p3 = document.querySelector('.p3');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

// ElementMethod
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;


// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    alert('ok');
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
}); */





//  Pebendaan event handler dan addEventListener()
// Jika menggunakan event handler maka perubahan terakhir yg dilakukan akan menimpa perubahan sebelumnya.
// Jika menggunakan addEventListener, dia akan menambah perubahannya.

const p3 = document.querySelector('.p3');
// Jika menggunakan Event Handler akan ditimpa
/* p3.onclick = function() {
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick = function() {
    p3.style.color = 'red';
} */


// Jika menggunakan addEventListener, dia akan menambah perubahannya.
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
});


/* p3.addEventListener('click', function() {
    p3.style.color = 'red';
}); */

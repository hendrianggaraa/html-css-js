// Manipulasi Element
// element.innerHTML
// element.style.<property>

// element.setAttribute()
/* 
element.getAttribute()
element.setAttribute()
element.removeAttribute()
*/

// element.classList
/* 
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.item()
element.classList.contains()
element.classList.replace()
*/



/* element.innerHTML */
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Hendri Anggara</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<p class="p1">paragraf 1 Manipulasi</p><a href="htpp://instagram.com">Instagram Manipulasi</a><p class="p2">paragraf 2 Manipulasi</p>';



/* element.style.<property> */
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';



/* element.setAttribute() */
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('href');
// a.removeAttribute('href');
// judul.setAttribute('name', 'Hendri');

const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');



/* element.classList */
// document.body.style.backgroundColor = 'lightblue';
// document.body.classList.toggle('biru-muda');
// documen
// p2.classList.add('label-1');
// p2.classList.add('label-2');
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');
// p2.classList.remove('label-2');
// p2.classList.toggle('biru-muda');
// p2.classList.item(0);
// p2.classList.contains('dua');
// p2.classList.replace('tiga', 'empat');
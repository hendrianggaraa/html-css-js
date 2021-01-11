// DOM Traversal Method
/* 
parentNode -> node
parentElement -> element
nextSibling -> node
nextElementSibling -> element
previousSibling -> node
previousElementSibling -> element
*/

/* const card = document.getElementsByClassName('card')[0];
const close = card.getElementsByClassName('close')[0];

close.addEventListener('click', function () {
    card.style.display = 'none';
}); */

/* const card = document.getElementsByClassName('card');
const close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        card[i].style.display = 'none';
    });
} */


// DOM Traversal
// parentElement
// getElementsByClassName / HTML Collections tidak punya function forEach
// const close = document.getElementsByClassName('close');
const close = document.querySelectorAll('.close');

/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
    });
} */

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
    });
});


const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);
// console.log(nama.previousElementSibling.previousElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);
// DOM Traversal
// parentElement
// getElementsByClassName / HTML Collections tidak punya function forEach
// const close = document.getElementsByClassName('close');
// const close = document.querySelectorAll('.close');
// console.log(close);

/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
    });
} */

/* close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        // e.target.parentElement.parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        // Menghentikan effect bubling dari si cardsnya
        e.stopPropagation();
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('ok');
    });
}); */


// Event Bubling dia akan mengetahui mana yg diklik
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target);
    // sedang mengklik tombol close yg manapun
    if (e.target.className == 'close') {
        // ambil target tadi
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});
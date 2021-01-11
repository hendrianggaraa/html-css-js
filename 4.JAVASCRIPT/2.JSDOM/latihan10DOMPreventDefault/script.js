// DOM Traversal
// parentElement
// getElementsByClassName / HTML Collections tidak punya function forEach
// const close = document.getElementsByClassName('close');
const close = document.querySelectorAll('.close');
// console.log(close);

/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
    });
} */

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        // e.target.parentElement.parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});
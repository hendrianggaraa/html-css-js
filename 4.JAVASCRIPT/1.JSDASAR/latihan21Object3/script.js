//  membuat object

//  cara 1 - function declaration
/* function halo() {
    console.log('halo');
}

halo(); */

// cara 2 - object literal
/* var obj = {};
obj.halo = function() {
    console.log('halo');
}

obj.halo(); */

// cara 3 - constructor
/* function Halo() {
    console.log('halo');
}

new Halo(); */


// this
// Object window adalah object global
// Di setiap kita membuat variabel di scope global, nah itu sama aja dia adalah properti atau method dari object window dengan kata lain kita membuat properti atau object bernama window. Karena javascript kingnya adl Object yaitu window === this.
// console.log(window.a);
// console.log(window === this);
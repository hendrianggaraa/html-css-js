// https://medium.com/koding-kala-weekend/memahami-javascript-sebagai-prototype-based-language-4ea7d18590e7#:~:text=Secara%20sederhana%2C%20semua%20function%20di,akan%20dipanggil%20di%20masa%20depan.

// Javascript adalah bahasa yang asynchronous, non-blocking, dan prototype-based.

// First Class Objects yang artinya sebuah function dapat disimpan dalam data structure, dijadikan argumen atau dijadikan return value dari function lain. 

var o = {
    a: 2,
    m: function () {
        return this.a + 1;
    }
}

// it should print 2
console.log(o.a);


//  sebuah function dianggap “belum aktif” jika ditulis tanpa (). Belum aktif disini artinya function tidak akan langsung dieksekusi oleh program dan dapat diperlakukan seperti object biasa.
// property yang memiliki value berupa function. Property ini disebut dengan method.
// it return statement that this object is a function
console.log(o.m);

// it should print 3
console.log(o.m());

// Selain itu, karena Javascript tidak mengenal konsep class, maka inheritance atau pewarisan dari satu object ke object lain menggunakan sebuah property khusus yang dimiliki oleh semua object yaitu prototype.

// pada ES6 memang dikenalkan sintaks class, namun sintaks itu hanyalah syntatic sugar dari prototype itu sendiri. 
//  object mewarisi property object lainnya melalui prototype chain.




// Hanya dengan meng-assign object bird ke dalam property __proto__ yang dimiliki object eagle, secara otomatis object eagle mewarisi semua property dari object bird.
var bird = {
    fly: true,
    color: 'brown',
};

var eagle = {};

eagle.__proto__ = bird;

console.log(eagle.fly);
console.log(eagle.color);



var x = {
    a: 1,
    m: function (c) {
        return this.a + this.b + c;
    }
};

var y = {
    b: 2,
    __proto__: x,
};

var z = {
    __proto__: y,
};

console.log(y.m(10));
console.log(z.m(20));
/* Seperti yang kita lihat diatas, meng-assign object X ke dalam __proto__ object Y akan membuat object Y mewarisi seluruh property dari object X. Begitu pula dengan object Z yang mewarisi seluruh property dari object Y yang sebelumnya mewarisi property dari object X. 
Inilah cara kerja dari prototype chaining. Andaikan kita mengakses sebuah property dari object misalnya bird.food, maka Javascript akan mencari property food pada object bird. Jika tidak ditemukan, maka Javascript akan menelusuri prototype yang mengarah ke parent dari object tersebut sampai property food ditemukan. Begitu seterusnya sampai akhirnya Javascript mengembalikan value dari property food atau undefined jika property food benar-benar tidak ditemukan. */



// Tadi sempat kita bahas bahwa inheritance melalui __proto__ tidak disarankan. Javascript telah menyediakan alternatif yang dapat kita gunakan yaitu Object.create. Mari kita refactor contoh-contoh diatas dengan menggunakan Object.create. Note: Object.create adalah fitur yang baru ada sejak ES5 dan tidak bisa berjalan di browser lama seperti IE8.

var bird = {
    fly: true,
    color: 'brown',
};

var eagle = Object.create(bird);

console.log(eagle.fly);
console.log(eagle.color);


var x = {
    a: 1,
    m: function (c) {
        return this.a + this.b + c;
    }
};

var y = Object.create(x, {
    b: {
        value: 2
    }
});
var z = Object.create(y);

console.log(y.m(10));
console.log(z.m(20));




// perubahan state yang terjadi di parent menyebabkan state yang ada di child berubah, sementara perubahan state di child tidak berpengaruh pada parent. 
var parent = {
    hair: 'curly',
    eyes: 'blue',
};

var children = Object.create(parent);

console.log('Parent hair: ' + parent.hair + ', Parent eyes: ' + parent.eyes);
console.log('Children hair: ' + children.hair + ', Children eyes: ' + children.eyes + '\n');

// set parent hair to straight and see if children hair property is automatically changed
console.log('Set parent hair to straight \n')
parent.hair = 'straight';

console.log('Parent hair: ' + parent.hair + ', Parent eyes: ' + parent.eyes);
console.log('Children hair: ' + children.hair + ', Children eyes: ' + children.eyes + '\n');

// set children eyes to blue and see if parent hair property is unchanged
console.log('Set children eyes to green \n')
children.eyes = 'green';

console.log('Parent hair: ' + parent.hair + ', Parent eyes: ' + parent.eyes);
console.log('Children hair: ' + children.hair + ', Children eyes: ' + children.eyes);


// Constructor Functions
// Function memiliki sebuah property khusus yang bernama prototype.
// Perlu dicatat bahwa tidak seperti regular object yang hanya memiliki property __proto__, function memiliki 2 macam prototype property : __proto__ dan prototype. Property__proto__ pada function tidak sama dengan property prototypenya.
function Zoo() {};
Zoo.__proto__ === Zoo.prototype






function Bird() {
    this.fly = true;
}

Bird.prototype.color = 'brown';

var eagle = new Bird();

console.log('eagle.fly: ' + eagle.fly);
console.log('eagle.color: ' + eagle.color);


// Secara sederhana, semua function di Javascript memiliki property prototype. Fungsi utama dari property prototype ini adalah sebagai shared resource yang digunakan oleh semua instance dari sebuah constructor function, baik yang ada sekarang maupun yang akan dipanggil di masa depan. Semua object yang dibuat dengan menggunakan new akan mewarisi seluruh property yang ada di prototype ini. 


function Foo() {
    this.a = 1;
    this.b = 2;
    this.c = function () {
        return this.a + this.b;
    }
}

var foo = new Foo();
console.log(foo.c());
console.log(foo);

function Bar() {
    this.a = 1;
    this.b = 2;
}

Bar.prototype.c = function () {
    return this.a + this.b;
}

var bar = new Bar();
console.log(bar.c());
console.log(bar);



// Sekilas nampak sama karena baik foo.c() dan bar.c() sama-sama mengembalikan nilai 3. Akan tetapi ketika kita menginspeksi instance foo dan bar dengan console.log terlihat perbedaan bahwa instance dari function Foo terdiri dari 3 object, sementara instance dari function Bar hanya terdiri dari 2 object saja. Berarti jika ada 100 instance dari masing-masing Foo dan Bar, maka Foo akan menghabiskan 300 slot memory sementara Bar hanya 200. Padahal secara fungsional, keduanya memiliki hasil yang sama. Inilah yang dimaksud dengan optimasi memory dengan menggunakan prototype.


// console.log(new Bar().__proto__ === Bar.prototype)

// bisa kita lihat ternyata Bar.prototype sama dengan (new Bar()).__proto__ yang artinya property prototype yang ada pada constructor function akan di-assign ke dalam __proto__ instance yang dipanggil dengan new. Jika kita bedah object bar (yang dibuat dari new Bar()), terlihat bahwa function c() berada di property __proto__ object bar.


// Dengan Constructor
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = {
    phi: 3.14,
    area: function () {
        return this.phi * Math.pow(this.radius, 2);
    },
}

function Triangle(base, height) {
    this.base = base;
    this.height = height;
}

Triangle.prototype.area = function () {
    return 0.5 * this.base * this.height;
}

var circle = new Circle(5);
var triangle = new Triangle(4, 7);

console.log(circle.area());
console.log(triangle.area());

// Dengan Object.create :
// Problem 2 objek saling terhubung dan boros memori
var Circle = {
    phi: 3.14,
    area: function (radius) {
        return this.phi * Math.pow(this.radius, 2);
    }
}

var Triangle = {
    area: function (base, height) {
        return 0.5 * this.base * this.height;
    }
}

var circle = Object.create(Circle, {
    radius: {
        value: 5
    },
});

var triangle = Object.create(Triangle, {
    base: {
        value: 4
    },
    height: {
        value: 7
    },
});

console.log(circle.area());
console.log(triangle.area());
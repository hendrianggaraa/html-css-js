/* for(var i = 0; i < 5; i++) {
    console.log('*');
} */

/* var s = '';
for(var i = 0; i < 7; i++) {
    for(var j = 0; j < 10; j++){
        s += '*'
    }
    s += '\n';
}

console.log(s); */

/* var s = '';
for(var i = 0; i < 5; i++) {
    for(var j = 0; j <= i; j++){
        s += '*'
    }
    s += '\n';
}

console.log(s); */

var s = '';
for(var i = 5; i > 0; i--) {
    for(var j = 0; j < i; j++){
        s += '*'
    }
    s += '\n';
}

console.log(s);
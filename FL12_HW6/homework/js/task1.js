let t;
let a;
let two = 2;
let four = 4;
do {
    t = 1;
    a = prompt('Input a from ax^2+bx+c: ');
    if(a === 0 || isNaN(a)) {
        
        console.log('Invalid input data');
        t = 0;
    }
} while(!t);
let b;
do {
    t = 1;
    b = prompt('Input b from ax^2+bx+c: ');
    if(isNaN(b)) {
        t = 0;
        console.log('Invalid input data');
    }
} while(!t);
let c;
do {
    t = 1;
    c = prompt('Input c from ax^2+bx+c: ');
    if(isNaN(c)) {
        t = 0;
        console.log('Invalid input data');
    }
} while(!t);
a = parseInt(a, 10);
b = parseInt(b, 10);
c = parseInt(c, 10);
let d = b*b - four*a*c;
if(d < 0) {
    console.log('No real solution');
} else if(d === 0) {
    console.log('x1 = x2 = '+-b/(two*a));
} else {
    console.log('x1 = '+(-b+Math.sqrt(d))/(two*a)+' and x2 = '+(-b-Math.sqrt(d))/(two*a));
}
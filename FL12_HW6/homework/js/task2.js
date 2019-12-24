let t;
let a;
do {
    t = 1;
    a = prompt('Input a: ');
    if(a <= 0 || isNaN(a)){
        if(isNaN(a)) {
            console.log('Input values should be ONLY numbers'); 
        } else {
            console.log('A triangle must have 3 sides with a positive definite length'); 
        } 
        t = 0;
    }
} while(!t);
let b;
do{
    t = 1;
    b = prompt('Input b: ');
    if(b <= 0 || isNaN(b)){
        if(isNaN(b)) {
            console.log('Input values should be ONLY numbers'); 
        } else {
            console.log('A triangle must have 3 sides with a positive definite length'); 
        } 
        t = 0;
    }
} while(!t);
let c;
do {
    t = 1;
    c = prompt('Input c: ');
    if(c <= 0 || isNaN(c)){
        if(isNaN(c)) {
            console.log('Input values should be ONLY numbers'); 
        } else {
            console.log('A triangle must have 3 sides with a positive definite length'); 
        } 
        t = 0;
    }
} while(!t);
a = parseInt(a, 10);
b = parseInt(b, 10);
c = parseInt(c, 10);
if(a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn`t exist') 
} else {
    if(a === b === c) {
        console.log('Equivalent triangle') 
    } else if(a === b || a === c || c === b) {
        console.log('Isosceles triangle') 
    } else {
        console.log('Scalene triangle') 
    }
}
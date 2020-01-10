let one = 1, two = 2, three = 3, four = 4, five = 5, seven = 7, eight = 8;
let thirty = 30, oneDayInSeconds = 86400000, daysInOneYear = 365, year2019 = 2019;
let num1 = 58, num2 = 14, num3 = 45, num4 = 31, num5 = 29;
function convert() {
    let res = []
    for(let i = 0; i < arguments.length; ++i) {
        if(typeof arguments[i] === 'number'){
            res[i] = '' + arguments[i];
        } else if(typeof arguments[i] === 'string') {
            res[i] = + arguments[i];
        }
    }
    return res;
}
convert('1', two, three, '4');

function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; ++i){
        func(arr[i]);
    }
}
executeforEach([1, two, three], function(el){
    console.log(el * two);
});

function mapArray(arr, func) {
    let counter = 0;
    executeforEach(arr, function(el){
        arr[counter++] = func(+el);
    });
    return arr;
}
mapArray([two, '5', eight], function(el){
    return el + three;
});

function filterArray(arr, func){
    let newArr = [];
    executeforEach(arr, function(el){
        if(func(el)){
            newArr.push(el);
        }
    });
    return newArr;
}
filterArray([two, five, eight], function(el){
    return el % two === 0;
});

function flipOver(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; --i){
        newStr += str[i];
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(arr) {
    let newArr = [];
    for(let i = 0; i < arr[1] - arr[0] + 1; ++i){
        newArr[i] = arr[0] + i;
    }
    return newArr;
}
makeListFromRange([two, seven]);

function getArrayOfKeys(arr, key) {
    let newArr = [];
    executeforEach(arr, function(el){
        newArr.push(el[key]);
    });
    return newArr;
}
 const actors = [
     {name: 'tommy', age: 36},
     {name: 'lee', age: 28}
];
getArrayOfKeys(actors, 'name');
function substitude(arr) {
    mapArray(arr, function(el){
        return el < thirty ? '*' : el;
    });
    return arr;
}
substitude([num1, num2, num3, two, num4, num5]);

function getPastDate(date, day) {
    return parseInt(new Date(+ date - day * oneDayInSeconds).toString().split(' ')[two]);
}
const date = new Date(year2019, 0, two);
getPastDate(date, 1);
getPastDate(date, two);  
getPastDate(date, daysInOneYear);
 
function formatDate(date) {
    let strDate = date.toString().split(' ');
    return strDate[three] + '/' + (1 + date.getMonth()) + '/' + strDate[two] + ' ' + strDate[four].slice(0, -three);
}
formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());
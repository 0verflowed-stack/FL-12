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
convert('1', 2, 3, '4');

function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; ++i){
        func(arr[i]);
    }
}
executeforEach([1, 2, 3], function(el){
    console.log(el * 2);
});

function mapArray(arr, func) {
    let counter = 0;
    executeforEach(arr, function(el){
        arr[counter++] = func(+el);
    });
    return arr;
}
mapArray([2, '5', 8], function(el){
    return el + 3;
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
filterArray([2, 5, 8], function(el){
    return el % 2 === 0;
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
makeListFromRange([2, 7]);

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
        return el < 30 ? '*' : el;
    });
    return arr;
}
substitude([58, 14, 45, 2, 31, 29]);

function getPastDate(date, day) {
    return parseInt(new Date(+ date - day * 86400000).toString().split(' ')[2]);
}
const date = new Date(2019, 0, 2);
getPastDate(date, 1);
getPastDate(date, 2);  
getPastDate(date, 365);
 
function formatDate(date) {
    let strDate = date.toString().split(' ');
    return strDate[3] + '/' + (1 + date.getMonth()) + '/' + strDate[2] + ' ' + strDate[4].slice(0, -3);
}
formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());
function makeNumber(str){
    let new_str = '';
    for(let i = 0; i < str.length; ++i){
        if(Number.isInteger(parseInt(str[i]))){
            new_str += str[i];
        }
    } 
    return new_str;
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('123098h76gfdd');
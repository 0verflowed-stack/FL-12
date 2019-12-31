function countNumbers(str){
    let result = {};
    for(let i = 0; i < str.length; ++i){
        if(Number.isInteger(parseInt(str[i]))){
            result[str[i]] = result[str[i]] === undefined ? 1 : ++result[str[i]];
        }
    }
    return result;
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
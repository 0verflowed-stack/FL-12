function isBigger(a, b){
    return !!((b-a)>>51);
}
isBigger(5,-1);
function isSmaller(a, b){
    return !!((a-b)>>51);
}
isSmaller(5,-1);
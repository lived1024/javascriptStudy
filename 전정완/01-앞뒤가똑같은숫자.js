// 문자열의 역순을 반환
var rev = function(str){
    var b = '';
    for(var i = 0 ; i < str.length ; i++){
        b += str[(str.length-1)-i];
    }
    return b;
};

var x = 11;

while(true){
    if(
        x.toString() === rev(x.toString())
        && x.toString(2) === rev(x.toString(2))
        && x.toString(8) === rev(x.toString(8))
    ){
        break;
    }
    x += 2;
}

console.log(x);

/*output

585

*/
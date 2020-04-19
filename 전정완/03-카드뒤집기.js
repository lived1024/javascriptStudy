
var cardNum = 100;
var arr = [];


//뒷면 0, 앞면 -1
for(var i=1 ; i<=cardNum ; i++){
    arr.push(0);
}

for(var i=2 ; i<=cardNum ; i++){
    
    //console.log(i + '번째 카드부터 ' + (i-1) + '장 간격으로 뒤집기');

    for(var k=i ; k<=cardNum ; k=k+i){
        arr[k-1] = ~(arr[k-1]);
    }

    //console.log(arr);
}

//값이 0인 인덱스 출력
for(var i=0 ; i<cardNum ; i++){
    if(arr[i] == 0){
        console.log(i+1);
    }
}

/*output

1
4
9
16
25
36
49
64
81
100

*/

//비트연산자
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND
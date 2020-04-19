var n = 100; //길이
var m = 5; //사람 수
var turn = 0; //자르기 회차

var arr = [n];

//배열의 모든 요소가 1과 같은지 확인
function isEveryOne(element, index, array){
    return element == 1;
}

while( ! arr.every(isEveryOne))
{
    var len = arr.length;
    var cut = m;

    for(var i = 0 ; i < len ; i++){
        
        if(arr[i] > 1 && cut > 0){
            
            //2로 나눈 몫
            var x = Math.floor(arr[i] / 2);
            //2로 나눈 나머지
            var y = arr[i] % 2;

            //첫번째 요소 값을 x값으로 대체
            arr.splice(i, 1, x);
            //첫번째 요소 인덱스+1 자리에 x+y값을 삽입
            arr.splice(i+1, 0, x+y);

            //인덱스 증가
            i++;

            //배열길이 증가
            len++;

            //사람 수 감소
            cut--;
        }
    }
    
    //자르기 회차 증가
    turn++;

    // 요소를 내림차순으로 정렬
    arr.sort(function(a,b){
        return b-a;
    });

    //배열 요소 출력
    console.log(turn + '회차', arr);
}

console.log(turn + '회차에 배열값이 전부 1입니다.');

/*output

문제1) n=20, m=3 일때 8회차
문제2) n=100, m=5 일때 23회차 ... 22회차가 정답?!
    --> 앞에서 순차적으로만 자르니, 자르지 않은 막대가 1개라서 노는 사람이 생김.
    --> 자르기 후 큰막대를 내림차순으로 정렬하자. 그러면 큰 막대기부터 자르게 됨.
*/

//splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every

//find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/* 
*  true : 앞면
*  false : 뒷면
*  
*  2번째 사람 : n부터 n(2) - 1 장 간격 -> 1장 간격 : 2,4,6,8,···     => 2의 배수
*  3번째 사람 : n부터 n(3) - 1 장 간격 -> 2장 간격 : 3,6,9,12···     => 3의 배수
*  4번째 사람 : n부터 n(4) - 1 장 간격 -> 3장 간격 : 4,8,12,16,···   => 4의 배수
*  
*  카드는 총 100장 ==> 뒤집을 카드가 없는 사람은 101번째!
*/


// 전체 카드를 저장할 배열
var all = [];
// 뒤집힌 카드 모음
var resultArr = [];

function run()
{
    ready();
    start();
    pushResult();

    console.dir(resultArr);
}

function ready()
{
    // 모든 카드를 뒤집은 상태로 저장
    for(var i = 0; i < 100; i++)
    {
        all[i] = false;
    }
}

function start()
{
    // n번째 사람
    var n = 1;
    
    // 뒤집는 사람에 대한 반복문
    while(true)
    {
        // 101번째 사람은 뒤집을 카드가 없음,,
        if(n > 100) break;

        // n번째 사람이 카드를 뒤집는 작업에 대한 반복
        var m = 1;
        while(true)
        {    
            // n의 배수가 100보다 크면 반복문 빠져나가기!
            var action = m + 1;
            var result = n * action;
            if(result > 100) break;
    
            toggle(result);
            
            m++;
        }
        n++;
    }
}

// 해당 숫자의 카드 뒤집기
function toggle(result)
{
    var resultIndex = result - 1;
    if(all[resultIndex] == true)
    {
        all[resultIndex] = false;
    }
    else
    {
        all[resultIndex] = true;
    }
}

// 결과 저장
function pushResult()
{
    for(var i = 0; i < all.length; i++)
    {
        if(all[i] == false)
        {
            resultArr.push(i+1);
        }
    }
}

run();
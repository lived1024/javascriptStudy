var all = [];           // 전체 숫자를 담는 배열
var resultArr = [];     // 2중 배열로 값을 저장

// 전체 숫자 담기
function ready(no)
{
    for(var i = 0; i < 20; i++)
    {
        all[i] = i + 1;
    }
}

// 작동
function run(no, person)
{
    ready(no);
    start(no, person);
}

function start(no, person)
{


    slice(no, targetArr);
}

// 반으로 쪼갠다!
function slice(no, targetArr)
{
    var mid = Math.ceil(no / 2) ;
    var firSliceArr = targetArr.slice(0, mid);
    var secSliceArr = targetArr.slice(mid, targetArr.length);

    
}

run(20);
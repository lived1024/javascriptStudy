var allArr = [];           // 전체 숫자를 담는 배열
var resultArr = [];     // 2중 배열로 값을 저장

// 작동
function run(no, person)
{
    ready(no);
    calCount();
    console.log(allArr);
    console.log("--------------------------------");
    console.log(resultArr);
    console.log("--------------------------------");
    action(person);

}

// 무조건 절반으로 쪼갠 후 배열 저장
function ready(no)
{
    var cnt = 0;
    while(true)
    {
        var newArr = new Array();
        if(cnt == 0)
        {
            allArr[cnt] = [no];

            var fir = Math.ceil( allArr[cnt] / 2 );
            var sec = allArr[cnt] - fir;
            newArr.push(fir);
            newArr.push(sec);
        }
        else 
        {
            var arr = allArr[cnt];
            for(var i = 0; i < arr.length; i++)
            {
                if(arr[i] >= 2)
                {
                    var fir = Math.ceil( arr[i] / 2 );
                    var sec = arr[i] - fir;
                    newArr.push(fir, sec);
                }
                else
                {
                    newArr.push(arr[i]);
                }
            }
        }

        allArr[cnt+1] = newArr;
        if(newArr.every(allCheck)) break; 
        cnt++;
    }
}

function allCheck(element, index, array) 
{
    return element == 1;
}

function calCount()
{
    for(var i = 0 ; i < allArr.length ; i++)
    {
        var value = allArr[i];
        // 2이상인 묶음의 개수
        var cnt = 0;
        // 반복문으로 한 묶음에 2개 이상인 것을 센다.
        for(var val of value)
        {
            if(val >= 2)
            {
                cnt++;
            }
        }
        resultArr.push(cnt);
    }
}

function action(person)
{
    var result = 0;
    for(var i = 0; i < resultArr.length; i++)
    {
        // 3명의 경우, 첫번째와 두번째는 인원대로 자를 수 없다
        if( i + 1 < person )
        {
            result += 1;
        }else
        {
            result += ( resultArr[i] / person );
        }
        console.log((i+1) + "번째 : " + result);
    }
    result = Math.ceil(result);
    console.log(result + "번");
}

run(20, 3);
//run(100, 5);
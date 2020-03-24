var cal = ['+', '-', '*', '/'];
var splitArr = [];  // 각 숫자에 대한 여러 경우의 배열을 분할하여 저장
var resultArr = []; // 결과를 담을 배열

function start()
{
    for(var i = 1000; i < 10000; i++)
    {
        getNumber(i.toString(), i);
    }
}

function getNumber(numberStr, number)
{
    // case를 나눠 splitArr에 저장.
    splitNumber(numberStr);
    
    // 각 상황에 따라 반복문 실행
    for(var i = 0; i < splitArr.length; i++)
    {
        calculateNumber(splitArr[i], number);
    }
}

// 상황에 따라 배열로 저장
function splitNumber(numberStr)
{
    // 1,1,1,1
    var fir = [];
    fir = numberStr.split("");
    // 1,1,2
    var sec = [];
    sec[0] = fir[0];
    sec[1] = fir[1];
    sec[2] = fir[2].concat(fir[3]);
    // 1,2,1
    var thi = [];
    thi[0] = fir[0];
    thi[1] = fir[1] + fir[2];
    thi[2] = fir[3];
    // 1, 3
    var four = [];
    four[0] = fir[0];
    four[1] = fir[1] + fir[2] + fir[3];
    // 2,1,1
    var fif = [];
    fif[0] = fir[0] + fir[1];
    fif[1] = fir[2];
    fif[2] = fir[3];
    // 2,2
    var six = [];
    six[0] = fir[0] + fir[1];
    six[1] = fir[2] + fir[3];
    // 3,1
    var sev = [];
    sev[0] = fir[0] + fir[1] + fir[2];
    sev[1] = fir[3];


    // 리소스 절약을 위해 splitArr의 정해진 위치로 지정해서 넣음.
    splitArr[0] = fir.toString();
    splitArr[1] = sec.toString();
    splitArr[2] = thi.toString();
    splitArr[3] = four.toString();
    splitArr[4] = fif.toString();
    splitArr[5] = six.toString();
    splitArr[6] = sev.toString();
}

// replace를 이용하여 구분자 대신 사칙연산 넣어 계산
function calculateNumber(splitArrStr, number)
{
    // 사칙연산 기호가 들어갈 index 검색
    var firIndex = splitArrStr.indexOf(",");
    for(var i = 0; i < cal.length; i++)
    {
        // 첫번째 쉼표 -> 계산식으로 변형
        var firConvert = splitArrStr.replaceAt(firIndex, cal[i]);
        // 사칙연산 기호가 들어갈 index 검색
        var secIndex = firConvert.indexOf(",");
        
        if(secIndex == -1) 
        {
            compareBoth(firConvert, number);
            continue;
        }
        
        for(var j = 0; j < cal.length; j++)
        {
            // 두번째 쉼표 -> 계산식으로 변형
            var secConvert = firConvert.replaceAt(secIndex, cal[j]);
            // 사칙연산 기호가 들어갈 index 검색
            var thiIndex = secConvert.indexOf(",");
            
            if(thiIndex == -1)
            {
                compareBoth(secConvert, number);
                continue;
            }

            for(var k = 0; k < cal.length; k++)
            {
                var thiConvert = secConvert.replaceAt(thiIndex, cal[k]);
                compareBoth(thiConvert, number);
            }
        }
    }
}

// 특정 index의 문자열을 바꿔주는 함수
String.prototype.replaceAt = function(index, character) 
{
    if(index == -1)
    {
        return character + this.substr(0);
    }
    else
    {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
}

function compareBoth(cal, number)
{
    var numberStr = number.toString();
    var reverseStr = reverse(numberStr);
    
    var result = eval(cal).toString();
    
    var reverseNumber = "";
    
    // 아래 주석은 1과 0001을 같게 취급한 경우
    //  var resultLength = result.split("").length;
    // if(resultLength < 4)
    // {
    //     result = convertLength(numberStr, resultLength, result);
    // }
    
    if(result === reverseStr)
    {
        // 첫 시작시
        if(resultArr.length == 0 && resultArr.indexOf(result) == -1)
        {
            appendResultArr(result, cal, number);
        }
        
        if(resultArr.indexOf(result) == -1)
        {
            appendResultArr(result, cal, number);
        }
    }
}

function reverse(str)
{
    var reverseStr = [];
    var result = "";
    var strArr = str.split("");
    for(var index = 0; index < str.length; index++)
    {
        reverseStr[index] = strArr[str.length-index-1];
    }
    result = reverseStr.join("");
    return result;
}

function convertLength(numberStr, resultLength, result)
{
    for(var i = 0; i < (numberStr.length-resultLength); i++ )
    {
        result = result.replaceAt(-1,"0");
    }
    return result;
}

function appendResultArr(result, cal, number)
{
    resultArr.push(result);
    console.log("계산식 : " + cal.toString() + "= " + result );
    console.log(number);
    console.log();
}


start();
console.log("end");
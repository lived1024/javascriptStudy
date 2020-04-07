var coinArr = [500, 100, 50, 10];
var maxLengthArr = [];
var resultCount = 0;

function run(money, limit)
{
    ready(money, limit);
    count(money, limit);
    console.log("-------------------------------------------------------------------");
    console.log("경우의 수 : " + resultCount);
    console.log("-------------------------------------------------------------------");
}

function ready(money, limit)
{
    // 각 동전
    for(var coin of coinArr)
    {
        var rem = money / coin;
        if(rem > limit) rem = limit;
        maxLengthArr.push(rem);
    }
}

function count(money, limit)
{
    for(var i = 0; i <= maxLengthArr[0]; i++)
    {
        // 동전 15개 초과
        if( i > limit ) continue;

        var firRem = money - (coinArr[0] * i);
        // 나머지가 0이면 이하 절차 무시        
        if(firRem == 0) 
        {
            console.log("동전 수 : " + i );
            console.log(coinArr[0] + " X " + i + " = " + money + "\r\n");
            resultCount++;
            continue;
        }

        for(var j = 0; j <= maxLengthArr[1]; j++)
        {
            // 동전 15개 초과
            if(i + j > limit) continue;

            var secRem = firRem - (coinArr[1] * j);
            // 나머지가 0이면 이하 절차 무시
            if(secRem == 0) 
            {
                console.log("동전 수 : " + (i + j) );
                console.log(coinArr[0] + " X " + i + " + " +
                            coinArr[1] + " X " + j + " = " + money + "\r\n");
                resultCount++;
                continue;
            }

            for(var k = 0; k <= maxLengthArr[2]; k++)
            {
                // 동전 15개 초과
                if(i + j + k > limit) continue;

                thiRem = secRem - (coinArr[2] * k);
                // 나머지가 0이면 이하 절차 무시
                if(thiRem == 0) 
                {
                    console.log("동전 수 : " + (i + j + k) );
                    console.log(coinArr[0] + " X " + i + " + " +
                                coinArr[1] + " X " + j + " + " +
                                coinArr[2] + " X " + k + " = " + money + "\r\n");
                    resultCount++;
                    continue;
                }

                for(var l = 0; l <= maxLengthArr[3]; l++)
                {
                    // 동전 15개 초과
                    if(i + j + k + l > limit) continue;

                    fourRem = thiRem - (coinArr[3] * l);
                    // 나머지가 0이면 이하 절차 무시
                    if(fourRem == 0)
                    {
                        console.log("동전 수 : " + (i + j + k + l) );
                        console.log(coinArr[0] + " X " + i + " + " +
                                    coinArr[1] + " X " + j + " + " +
                                    coinArr[2] + " X " + k + " + " +
                                    coinArr[3] + " X " + l + " = " + money + "\r\n");
                        resultCount++;
                        continue;
                    }
                    
                }
            }
        }
    }    
}

run(1500, 15);
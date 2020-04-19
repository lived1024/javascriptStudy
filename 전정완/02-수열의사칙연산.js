var op = '+-*/';

var a = 1234;
var num = a.toString();
var rvs = num.split('').reverse().join('');

for(var i=0; i<4; i++){

    //console.log(op[i]);

    //연산자 1개 계산
    for(var x=1; x<=3; x++){
        var fom = num.substr(0,x).concat(op[i], num.substr(x));
        var res = eval(fom).toString();
        console.log(fom + '=' + res);

        if(rvs === res)
        {
            console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
            break;
        }
    }

    for(var k=0; k<4; k++){

        //console.log(op[i] + op[k]);

        //연산자 2개 계산
        for(var x=1; x<=2; x++){
            var fom = num.substr(0,1).concat(op[i], num.substr(1,x), op[k], num.substr(x+1));
            var res = eval(fom).toString();
            console.log(fom + '=' + res);

            if(rvs === res)
            {
                console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
                break;
            }
        }

        for(var m=0; m<4; m++){
            
            //console.log(op[i] + op[k] + op[m]);

            //연산자 3개 계산
            var fom = num.substr(0,1).concat(op[i], num.substr(1,1), op[k], num.substr(2,1), op[m], num.substr(3));
            var res = eval(fom).toString();
            console.log(fom + '=' + res);

            if(rvs === res)
            {
                console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
                break;
            }
        }
    }
}


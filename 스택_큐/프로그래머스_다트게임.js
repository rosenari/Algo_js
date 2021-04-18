function solution(dartResult) {
    dartResult = dartResult.split("");
    let numbers = [];
    
    let num = "";
    for(let i=0;i<dartResult.length;i++){
        if(dartResult[i]=='S' ||dartResult[i]=='D' || dartResult[i]=='T'){
            let sum = 0;            
            if(dartResult[i]=='S') sum = parseInt(num);
            else if(dartResult[i]=='D') sum = Math.pow(parseInt(num),2);
            else if(dartResult[i]=='T') sum = Math.pow(parseInt(num),3);
            numbers.push(sum);
            num = "";
        }else {
            if(dartResult[i]!=='*' && dartResult[i]!=='#') num+=dartResult[i];
            else{
                if(dartResult[i]=='*'){
                    if(numbers.length >= 2){
                        numbers[numbers.length-1] =numbers[numbers.length-1]*2; 
                        numbers[numbers.length-2] =numbers[numbers.length-2]*2; 
                    }else{
                        numbers[numbers.length-1] =numbers[numbers.length-1]*2; 
                    }
                }else {
                    numbers[numbers.length-1] =numbers[numbers.length-1]*-1; 
                }
            }
        } 
    }
    let answer = 0;
    while(numbers.length > 0){
        answer += numbers.pop();
    }
    
    return answer;
}

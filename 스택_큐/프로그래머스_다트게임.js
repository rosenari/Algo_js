function solution(dartResult) {
    let scores = [];
    dartResult = dartResult.split("");
    for(let i=0;i<dartResult.length;i++){
        if(dartResult[i]=='S'){
            if(dartResult[i-1]=="0" 
               && dartResult[i-2]=="1") scores.push(Math.pow(10,1));
            else scores.push(Math.pow(dartResult[i-1],1));
        }else if(dartResult[i]=='D'){
            if(dartResult[i-1]=="0" 
               && dartResult[i-2]=="1") scores.push(Math.pow(10,2));
            else scores.push(Math.pow(dartResult[i-1],2));
        }else if(dartResult[i]=='T'){
            if(dartResult[i-1]=="0" 
               && dartResult[i-2]=="1") scores.push(Math.pow(10,3));
            else scores.push(Math.pow(dartResult[i-1],3));
        }else if(dartResult[i]=='*'){
            if(scores.length > 0) scores[scores.length-1] *= 2;
            if(scores.length > 1) scores[scores.length-2] *= 2;
        }else if(dartResult[i]=='#'){
            if(scores.length > 0) scores[scores.length-1] *= -1;
        }
    }
    let answer = 0;
    while(scores.length > 0) answer+=scores.shift();
    
    return answer;
}

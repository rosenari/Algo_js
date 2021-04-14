let answer = [];
function solution(numbers) {
    combination(0,0,numbers,0);
    
    answer.sort((a,b) => a-b);
    
    return answer;
}

function combination(n,start,numbers,sum){
    if(n==2){
        if(answer.indexOf(sum)==-1){
            answer.push(sum);
        }
        return;
    }
    
    for(let i=start;i<numbers.length;i++){
        combination(n+1,i+1,numbers,sum+numbers[i]);
    }    
}

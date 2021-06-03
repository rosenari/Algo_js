function solution(n) {
    let answer = [];
    Hanoi(1,3,2,n,answer);
    return answer;
}

function Hanoi(from,to,x,n,answer){
    if(n==0) return;
    
    Hanoi(from,x,to,n-1,answer);
    answer.push([from,to]);
    Hanoi(x,to,from,n-1,answer);
}

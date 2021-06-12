function solution(N) {
    let binary = N.toString(2);
    let max = 0;
    let cnt = 0;

    for(let n of binary){
       if(n=='0') cnt++;
       else{
           max = Math.max(max,cnt);
           cnt = 0;
       }     
    }

    return max;
}

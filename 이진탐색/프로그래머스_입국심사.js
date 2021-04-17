function solution(n, times) {
    times.sort((a,b) => a-b);
    let max = times[times.length-1] * n;
    let min = 0;
    
    return binarySearch(max,min,times,n); 
}

function binarySearch(max,min,times,n){
    let answer = max;
    
    while(min <= max){
        
        let sum = 0;
        let mid = parseInt((max+min)/2);
        
        for(let time of times){
            sum+=parseInt(mid/time);
        }
        
        if(sum >= n){
            max = mid-1;
            answer = Math.min(answer,mid);
        }else{
            min = mid+1;
        }
    }
    
    return answer;
}

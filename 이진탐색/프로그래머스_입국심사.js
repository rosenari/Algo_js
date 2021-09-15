function solution(n, times) {
    times.sort((a,b) => a-b);
    let left = 0;
    let right = n * times[times.length - 1];
    let answer = right;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((a,v) => a + Math.floor(mid/v),0); //sum은 걸리는 시간이 mid일때, 각 심시관이 처리할수 있는 사람의 수
        if(n > sum) { //심사관이 처리할 수 있는 사람의 수가 처리해야할 사람수보다 적으면 안됨.
            left = mid + 1;
        } else { //심사관이 처리할 수 있는 사람의 수가 처리해야할 사람의 수보다 많거나 같으면 상관없음.
            answer = Math.min(mid, answer);
            right = mid - 1;
        }
    }
    return answer;
}

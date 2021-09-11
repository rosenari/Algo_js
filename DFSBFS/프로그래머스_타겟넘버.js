let answer = 0;
function solution(numbers, target) {
    const N = numbers.length;
    powerSet(0, 0, N, numbers, target);
    return answer;
}

function powerSet(cnt, sum, N, numbers, target){
    if(cnt === N){
        if(sum === target) answer++;
            
        return;
    }
    powerSet(cnt + 1, sum + numbers[cnt], N, numbers, target);
    powerSet(cnt + 1, sum - numbers[cnt], N, numbers, target);
}

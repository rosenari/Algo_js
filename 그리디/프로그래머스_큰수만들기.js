function solution(number, k) {
    const answer = [];
    number = Array.from(number);
    number.forEach((pick, index) => {
        while(answer[answer.length - 1] < pick && k > 0){
                answer.pop();
                k--;
        }
        answer.push(pick);
    });
    if(k > 0) answer.pop();
    return answer.join('');
}

function solution(numbers) {
    const answer = numbers.sort((a, b) => ('' + b + a) - ('' + a + b)).join('');
    return parseInt(answer) === 0 ? '0' : answer;
}

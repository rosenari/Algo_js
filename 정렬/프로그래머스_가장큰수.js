function solution(numbers) {
    const answer = numbers.sort((a,b) => [b,a].join('') - [a,b].join('')).join('');
    return parseInt(answer) === 0 ? '0' : answer;
}

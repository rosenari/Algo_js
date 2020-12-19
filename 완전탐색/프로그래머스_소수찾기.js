//프로그래머스 LEVEL2
//해시,에라토스테네스의 체,DFS(완탐)-nPr 사용

function solution(numbers) {
    numbers = Array.from(numbers);

    for (let i = 1; i <= numbers.length; i++)
        nPr(0, i, numbers, new Array(numbers.length).fill(false), new Array());

    return answer;
}

let map = [];
let answer = 0;
let nPr = (cnt, target, numbers, v, num) => {
    if (cnt == target) {
        let result = parseInt(num.join(''));
        if (map[result] !== undefined) return;

        map[result] = true;
        if (isPrime(result)) answer++;

        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (v[i]) continue;
        v[i] = true;
        num.push(numbers[i]);
        nPr(cnt + 1, target, numbers, v, num);
        num.pop();
        v[i] = false;
    }
}
let isPrime = (num) => {
    let isNot = new Array(num + 1).fill(false);
    isNot[0] = true;
    isNot[1] = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (isNot[i]) continue;

        for (let j = i + i; j <= num; j += i) {
            isNot[j] = true;
        }

    }

    if (isNot[num]) return false;
    return true;
}
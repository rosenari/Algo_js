//프로그래머스 LEVEL2

function solution(brown, yellow) {
    var answer = [];

    for (let i = 1; i <= brown; i++) {
        for (let j = 1; j <= i; j++) {
            if (i * j == brown + yellow && ((i * 2) + (j * 2) - 4) == brown) {
                answer.push(i);
                answer.push(j);
                return answer;
            }
        }
    }

    return answer;
}
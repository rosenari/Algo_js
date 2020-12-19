//프로그래머스 LEVEL1

function solution(answers) {
    var answer = [];
    let human = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let cnt = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        cnt[0] = human[0][i % human[0].length] == answers[i] ? cnt[0] + 1 : cnt[0];
        cnt[1] = human[1][i % human[1].length] == answers[i] ? cnt[1] + 1 : cnt[1];
        cnt[2] = human[2][i % human[2].length] == answers[i] ? cnt[2] + 1 : cnt[2];
    }
    let max = 0;
    cnt.forEach((v) => {
        max = v > max ? v : max;
    });

    cnt.forEach((v, i) => {
        if (max == v) answer.push(i + 1);
    });

    answer.sort();

    return answer;
}
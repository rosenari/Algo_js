//프로그래머스 LEVEL2

function solution(progresses, speeds) {
    var answer = [];
    let queue = [];
    progresses.forEach((v, i) => {
        queue.push(Math.ceil((100 - v) / speeds[i]));
    })

    let max = queue.shift();
    answer.push(1);
    while (queue.length > 0) {
        let v = queue.shift();
        if (v <= max) answer[answer.length - 1]++;
        else {
            max = v;
            answer.push(1);
        }
    }

    return answer;
}
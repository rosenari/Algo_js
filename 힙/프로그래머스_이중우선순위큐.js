//프로그래머스 LEVEL3

function solution(operations) {
    var answer = [];
    let queue = [];
    operations.forEach((v) => {
        v = v.split(" ");
        let op = v[0];
        let num = parseInt(v[1]);
        if (op == "I") {
            queue.push(num);
            queue.sort((a, b) => {
                return b - a;
            });
        } else {
            if (queue.length > 0) {
                if (num == 1) queue.shift();
                else queue.pop();
            }
        }
    });
    if (queue.length <= 0) answer = [0, 0];
    else answer = [queue[0], queue[queue.length - 1]];

    return answer;
}
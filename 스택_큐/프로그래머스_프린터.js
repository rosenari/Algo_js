//프로그래머스 LEVEL2

function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((v, i) => {
        return [v, i];
    });

    while (queue.length > 0) {
        let doc = queue.shift();
        let p = false;
        for (let i in queue) {
            if (doc[0] < queue[i][0]) {
                p = true;
                break;
            }
        }
        if (p) queue.push(doc);
        else {
            answer++;
            if (doc[1] == location) break;
        }
    }

    return answer;
}
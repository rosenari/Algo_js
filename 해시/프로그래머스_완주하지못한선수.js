//프로그래머스 LEVEL1

function solution(participant, completion) {
    var answer = '';
    let map = [];
    completion.forEach((v) => {
        if (!map[v]) map[v] = 1;
        else map[v] += 1;
    })

    participant.forEach((v) => {
        if (!map[v]) answer = v;
        else map[v] -= 1;
    });


    return answer;
}
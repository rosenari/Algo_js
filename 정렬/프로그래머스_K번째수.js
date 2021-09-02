//프로그래머스 LEVEL1
function solution(array, commands) {
    const answer = [];
    commands.map(command => {
        const i = command[0] - 1;
        const j = command[1];
        const k = command[2] - 1;
        answer.push(array.slice(i, j).sort((a, b) => a - b)[k]);
    });
    return answer;
}

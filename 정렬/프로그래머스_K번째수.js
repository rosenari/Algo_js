//프로그래머스 LEVEL1
function solution(array, commands) {
    var answer = [];

    commands.forEach((arr) => {
        let temp = array.slice(arr[0] - 1, arr[1]);
        temp.sort((a, b) => a - b);
        answer.push(temp[arr[2] - 1]);
    });

    return answer;
}
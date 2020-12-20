//프로그래머스 LEVEL2

let testCase = "ABAAAAABAB";

function solution(name) {
    var answer = 0;

    arr = Array.from(name);
    v = new Array(arr.length).fill(false);

    while (!check(v, arr)) {
        answer += BFS();
    }


    return answer;
}

let context = 0;
let arr = [];
let BFS = () => {
    let cnt = 0;
    let queue = [];
    queue.push([context, 1, 0]);
    queue.push([context, -1, 0]);

    while (queue.length > 0) {
        let data = queue.shift();
        let index = data[0];
        if (!v[index] && arr[index] !== "A") {
            cnt += data[2];
            let a = Math.abs(arr[index].charCodeAt(0) - "A".charCodeAt(0));
            let b = Math.abs(26 - (arr[index].charCodeAt(0) - "A".charCodeAt(0)));
            if (a < b) cnt += a;
            else cnt += b;
            context = index;
            v[index] = true;
            break;
        }

        let sum = (index + data[1]);
        if (sum < 0) sum += arr.length;
        sum %= arr.length;
        queue.push([sum, data[1], data[2] + 1]);
    }

    return cnt;
}

let v = [];
let check = (v, arr) => {
    for (let i = 0; i < v.length; i++) {
        if (!v[i] && arr[i] !== "A") {
            return false;
        }
    }

    return true;
}

console.log(solution(testCase));
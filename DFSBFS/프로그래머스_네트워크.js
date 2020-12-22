function solution(n, computers) {
    var answer = 0;

    visited = new Array(n).fill(false);
    for (let i in computers) {
        if (visited[i]) continue;
        DFS(i, computers);
        answer++;
    }

    return answer;
}

let visited;
let DFS = (n, computers) => {
    visited[n] = true;

    for (let i in computers[n]) {
        if (visited[i] || computers[n][i] !== 1) continue;
        DFS(i, computers);
    }

}
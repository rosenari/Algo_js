const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let V, E, K;


let adjList = [];
const solution = (inp) => {
    let line = inp.shift();
    line = line.split(" ").map(v => parseInt(v));
    V = line[0];
    E = line[1];
    K = parseInt(inp.shift());
    adjList = new Array(V + 1).fill(null).map(() => Array());
    visited = new Array(V + 1).fill(false);
    inp.forEach((li) => {
        li = li.split(" ").map((v) => parseInt(v));
        let from = li[0];
        let to = li[1];
        let weight = li[2];
        let temp = adjList[from];
        temp.push(new Edge(to, weight));
    });

    let ans = Djikstra();
    for (let i = 1; i < ans.length; i++) {
        if (ans[i] == 987654321) {
            console.log("INF");
        } else {
            console.log(ans[i]);
        }
    }
}
let visited;
const Djikstra = () => {
    let d = new Array(V + 1).fill(987654321);
    d[K] = 0;
    let queue = new Array();
    queue.push([K, d[K]]);
    while (queue.length > 0) {
        let pos = queue.shift();
        let vertex = pos[0];
        if (visited[vertex]) {
            continue;
        }
        visited[vertex] = true;

        adjList[vertex].forEach((v) => {
            if (!visited[v.to] && (d[v.to] > d[vertex] + v.weight)) {
                d[v.to] = d[vertex] + v.weight;
                queue.push([v.to, d[v.to]]);
                queue.sort((a, b) => {
                    return a[1] - b[1];
                })
            }
        });
    }

    return d;
}

class Edge {
    constructor(to, weight) {
        this.to = to;
        this.weight = weight;
    }
}


let input = [];
r1.on('line', (line) => {
    input.push(line);
})
    .on('close', () => {
        solution(input);
        process.exit();
    })
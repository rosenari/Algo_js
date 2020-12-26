function solution(n, edge) {
    var answer = 0;
    let node = new Array(n + 1);
    d = new Array(n + 1).fill(987654321);
    v = new Array(n + 1).fill(false);
    for (let i = 0; i < node.length; i++) {
        node[i] = new Array();
    }
    for (let i in edge) {
        let from = edge[i][0];
        let to = edge[i][1];
        node[from].push(to);
        node[to].push(from);
    }
    console.log(node)
    Dijkstra(node);
    console.log(d);
    let max = 0;
    for (let i = 1; i < d.length; i++) {
        max = Math.max(max, d[i])
    }
    for (let i = 1; i < d.length; i++) {
        if (d[i] == max) answer++;
    }

    return answer;
}
let d;
let v;
let Dijkstra = (node) => {
    d[1] = 0;
    let pque = [];
    pque.push([1, d[1]]);
    while (pque.length > 0) {
        let p = pque.shift();
        let vt = p[0];
        let dis = p[1];
        if (v[vt]) continue;
        v[vt] = true;

        for (let i in node[vt]) {
            let vt2 = node[vt][i];
            if (!v[vt2] && d[vt2] > dis + 1) {
                d[vt2] = dis + 1;
                pque.push([vt2, d[vt2]]);
                pque.sort((a, b) => {
                    return a[1] - b[1];
                });
            }
        }
    }

}
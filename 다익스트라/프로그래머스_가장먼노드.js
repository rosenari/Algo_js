function solution(n, edge) {
    const list = Array.from({ length: n + 1 }).map(_ => []);
    const v = new Array(n + 1).fill(false);
    edge.forEach(([s, d]) => {
        list[s].push(d);
        list[d].push(s);
    });
    
    const d = Dijkstra(list, n);
    const max = Math.max(...d);
    return d.filter(v => v === max).length;
}

function Dijkstra(list, n) {
    const queue = [];
    let cnt = 0;
    const v = new Array(n + 1).fill(false);
    const d = new Array(n + 1).fill(Infinity);
    d[0] = 0, d[1] = 0;
    queue.push({ index: 1, distance: d[1] });

    while(queue.length > 0){
        const { index, distance } = queue.shift();
        if(v[index]) continue;
        v[index] = true;
        
        if(cnt++ == n) return d;        
        
        for(const node of list[index]){
            if(!v[node] && distance + 1 < d[node] ){
                d[node] = distance + 1;
                queue.push({ index: node, distance: d[node] });
                queue.sort((a,b) => {
                    return a.distance - b.distance;
                });
            }
        }
    }
    
    return d;
}

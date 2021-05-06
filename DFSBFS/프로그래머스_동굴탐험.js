function solution(n, path, order) {
    let adjList = new Array(n);
    let v = new Array(n).fill(false);
    for(let i=0;i<n;i++) adjList[i] = [];
    
    for(let i=0;i<path.length;i++){
        let from = path[i][0];
        let to = path[i][1];
        adjList[from].push(to);
        adjList[to].push(from);
    }
    
    let before = {};
    let after = {};
    
    for(let i=0;i<order.length;i++){
        if(order[i][1]==0) return false;
        before[order[i][1]] = order[i][0];
    }
    
    BFS(v,adjList,before,after);
    
    for(let i=0;i<n;i++) if(!v[i]) return false;
    return true;
}

function BFS(v,adjList,before,after) {
    v[0] = true;
    let queue = [];
    queue.push(0);
    
    while(queue.length > 0){
        let num = queue.shift();
        
        for(let node of adjList[num]){
            if(!v[node]){                
                if(before[node] && !v[before[node]]){
                    after[before[node]] = node;
                    continue;
                }
                
                v[node] = true;
                queue.push(node);
                
                if(after[node] && !v[after[node]]){
                    v[after[node]] = true;
                    queue.push(after[node]);
                }
            }
        }
    }
}

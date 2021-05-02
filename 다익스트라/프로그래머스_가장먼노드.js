function solution(n, edge) {
    return Djikstra(n,edge);
}

function Djikstra(n,edge){
    let adjList = new Array(n+1);
    for(let i=0;i<adjList.length;i++) adjList[i] = [];
    for(let i=0;i<edge.length;i++){
        let from = edge[i][0];
        let to = edge[i][1];
        adjList[from].push(to);
        adjList[to].push(from);
    }
    
    let v = new Array(n+1).fill(false);
    let d = new Array(n+1).fill(Infinity);
    d[1] = 0;
    let queue = [];
    queue.push([1,d[1]]);
    
    while(queue.length > 0){
        let data = queue.shift();
        let vertex = data[0];
        let distance = data[1];
        if(v[vertex]) continue;
        
        for(let i=0;i<adjList[vertex].length;i++){
            if(!v[adjList[vertex][i]] 
               && d[adjList[vertex][i]] > distance+1){
                d[adjList[vertex][i]] = distance+1;
                queue.push([adjList[vertex][i],d[adjList[vertex][i]]]);
                queue.sort((a,b)=> a[1]-b[1]);
            }
        }
    }
    
    let max = 0;
    let answer = 0;
    for(let i=1;i<d.length;i++) max = Math.max(max,d[i]);
    for(let i=1;i<d.length;i++) if(max==d[i]) answer++;
    return answer;
}

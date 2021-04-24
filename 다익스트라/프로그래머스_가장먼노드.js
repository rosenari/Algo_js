function solution(n, edge) {
    let adjList = new Array(n+1);
    
    for(let i=0;i<adjList.length;i++){
        adjList[i] = [];
    }    
    
    for(let e of edge){
        let from = e[0];
        let to = e[1];
        adjList[from].push(to);
        adjList[to].push(from);
    }
    
    let v = new Array(n+1).fill(false);
    let d = new Array(n+1).fill(Infinity);
    d[1] = 0;
    
    Dijkstra(d,v,adjList)
    
    let max = 0;
    for(let i=1;i<d.length;i++) max = Math.max(max,d[i]);
    
    let answer = 0;
    for(let i=1;i<d.length;i++) if(d[i]==max) answer++;
    
    return answer;
}

function Dijkstra(d,v,adjList){
    let pque = [];
    pque.push([1,d[1]]);
    while(pque.length > 0){
        let data = pque.shift();
        if(v[data[0]]) continue;
        
        v[data[0]]=true;
        
        let vertex = adjList[data[0]];
        for(let i=0;i<vertex.length;i++){
            if(!v[vertex[i]] && d[vertex[i]] >1+d[data[0]]){
                d[vertex[i]] = 1+d[data[0]];
                pque.push([vertex[i],d[vertex[i]]]);
                pque.sort((a,b)=>{
                    return a[1] - b[1];
                })
            }
        }
    }
}

let p;
function solution(n, costs) {
    costs.sort((a,b) => a[2]-b[2]);
    p = new Array(n);
    for(let i=0;i<n;i++){
        p[i] = i;
    }
    let answer = 0;
    let count = 0;
    while(costs.length > 0){
        let edge = costs.shift();
        if(union(edge[0],edge[1])){
            answer+=edge[2];
            count++;
        }
        
        if(count==n-1){
            break;
        }
    }
    
    return answer;
}

function find(x){
    if(p[x]==x) return x;
    return p[x] = find(p[x]);
}

function union(x,y){
    let px = find(x);
    let py = find(y);
    if(px==py) return false;
    
    p[px] = py;
    
    return true;
}

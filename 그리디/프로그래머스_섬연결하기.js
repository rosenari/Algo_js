let p;
function solution(n, costs) {
    let answer = 0, num = 0;
    p = Array.from({length:n}).map((_, i) => i);
    costs.sort((a,b) => a[2] - b[2]);
    
    while(costs.length > 0){
        const bridge = costs.shift();
        if(union(bridge[0], bridge[1])){
            answer += bridge[2];
            num++;
        }
        if(num === n - 1){
            break;
        }
    }
    return answer;
}

function find(x){
    if(p[x] === x) return x;
    return p[x] = find(p[x]);
}

function union(x, y){
    const px = find(x);
    const py = find(y);
    if(px !== py){
        p[px] = py;
        return true;
    }
    return false;
}

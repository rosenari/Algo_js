function solution(n, computers) {
    let answer = 0;
    const v = Array.from({length:n}).fill(false);
    for(const s in computers){
        if(!v[s]){
            DFS(s, computers, n, v);
            answer++;
        }
    }
    return answer;
}

function DFS(num, computers, n, v){
    v[num] = true;        
    for(const linkNum in computers[num]){
        if(!v[linkNum] && computers[num][linkNum]) DFS(linkNum, computers, n, v);
    }
}

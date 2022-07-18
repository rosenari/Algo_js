let answer = 0;
function solution(k, dungeons) {
    const N = dungeons.length;
    const visited = Array.from({length: N}).fill(false);
    nPr(k, N, 0, dungeons, visited);
    return answer;
}

function nPr(k, N, start, dungeons, visited) {
    answer = Math.max(answer, start);
    if(start === N) {
       return; 
    }
    
    for(let i=0; i<N; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        const [minEnerge, consumeEnerge] = dungeons[i];
        if(k >= minEnerge) nPr(k - consumeEnerge, N, start + 1, dungeons, visited);
        visited[i] = false;
    }
}

let N;
function solution(n) {
    N = n;
    let cols = new Array(N).fill(-1);
    let rows = new Array(N).fill(-1);
    
    for(let i=0;i<N;i++){
        cols[0] = i;
        rows[i] = 0;
        DFS(1,cols,rows);
        cols[0] = -1;
        rows[i] = -1;
    }
    
    return answer;
}
let answer = 0;
function DFS(row,cols,rows){
    if(row==N){
        answer++;
        return;
    }
    
    loop:
    for(let i=0;i<N;i++) {
        //같은 열에 있는지 확인
        if(rows[i] >= 0) continue;
        
        //같은 대각선에 있는지 확인
        for(let j=0;j<row;j++){
            if(Math.abs(j-row) == Math.abs(cols[j]-i)){
                continue loop;
            }
        }
        
        rows[i] = row;
        cols[row] = i;
        DFS(row+1,cols,rows);
        rows[i] = -1;
        cols[row] = -1;
    }
}

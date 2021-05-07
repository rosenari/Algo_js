function solution(board) {
    return BFS(board);
}

let dr = [0,-1,0,1];
let dc = [-1,0,1,0];
function BFS(board){
    let v = new Array(board.length);
    for(let i=0;i<v.length;i++){
        v[i] = new Array(board.length);
        for(let j=0;j<v[i].length;j++){
            v[i][j] = new Array(4).fill(false);
        }
    }
    let queue = [];
    v[0][0].fill(true);
    queue.push([0,0,-1,0]);
    
    while(queue.length > 0){
        let pos = queue.shift();
        if(pos[0]==board.length-1 && pos[1]==board.length-1){
            return pos[3];
        }
        
        for(let i=0;i<dr.length;i++){
            let nr = pos[0]+dr[i];
            let nc = pos[1]+dc[i];
            if(nr < 0 || nr >= board.length || nc < 0 || nc >= board.length || board[nr][nc]==1
              || v[nr][nc][pos[2]]) continue;
            v[nr][nc][pos[2]] = true;
            if(pos[2]==-1 || pos[2]==i) queue.push([nr,nc,i,pos[3]+100]);
            else{
                queue.push([nr,nc,i,pos[3]+100+500]);
            }
            queue.sort((a,b) => a[3]-b[3]);
        }
    }
    return 0;
}

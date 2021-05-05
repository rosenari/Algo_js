let v;
function solution(m, n, board) {
    for(let i=0;i<m;i++) board[i] = board[i].split("");
    let answer = 0;
    v = new Array(m);
    for(let i=0;i<v.length;i++) v[i] = new Array(n).fill(false);
    while(check(m,n,board)){
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(v[i][j]){
                    board[i][j] = 0;
                    answer++;
                }
            }
        }
        
        clean(m,n,board);
        for(let i=0;i<v.length;i++) v[i].fill(false);
    }
    
    return answer;
}
let dr = [0,0,1,1];
let dc = [0,1,0,1];
function check(m,n,board){
    let is = false;
    for(let row=0;row<m-1;row++){
        for(let col=0;col<n-1;col++){
            if(board[row][col]==0) continue;
            let sum = 0;
            for(let i=0;i<dr.length;i++){
                if(board[row][col]==board[row+dr[i]][col+dc[i]]) sum++;
            }
            if(sum==4){
                is = true;
                for(let i=0;i<dr.length;i++) v[row+dr[i]][col+dc[i]] = true;
            }
        }
    }
    
    return is;
}

function clean(m,n,board){
    for(let col=0;col<n;col++){
        let stack = [];
        for(let row=0;row<m;row++){
            if(board[row][col]!==0){
                stack.push(board[row][col]);
                board[row][col] = 0;
            }
        }
        let index = m;
        while(stack.length > 0){
            board[--index][col] = stack.pop();
        }
    }
}

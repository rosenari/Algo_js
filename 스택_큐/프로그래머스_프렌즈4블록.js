function solution(m, n, board) {
    let answer = 0;
    let v = new Array(m); //지워야할 칸인지 체크용
    for(let i=0;i<m;i++){
        board[i] = board[i].split("");
        v[i] = new Array(n);
    }
    
    while(true){
        let is = false; //지울 칸이 있는지 확인용
        //v초기화
        for(let i=0;i<v.length;i++) v[i].fill(0);
        
        //지울 블록찾기
        for(let row=0;row<m-1;row++){
            for(let col=0;col<n-1;col++){
                if(checkBlock(board,v,row,col)) is = true;
            }
        }
        
        //더이상 꺨것이 없다면 끝
        if(!is) break;
    
        //블록깨기
        for(let row=0;row<m;row++){
            for(let col=0;col<n;col++){
                if(v[row][col]==1){
                    board[row][col] = 0; 
                    answer++;
                }
            }
        }
    
        for(let col=0;col<n;col++){
            //0이아닌 해당 열의 모든 값을 큐에 담을 예정
            let queue = [];
            for(let row=m-1;row>=0;row--){
                if(board[row][col]!==0) queue.push(board[row][col]);
                //담았다면 0으로 표시
                board[row][col]=0;
            }

            //큐에서 꺼내어 바닥부터 쌓는다.
            let row = m-1;
            while(queue.length > 0){
                board[row][col] = queue.shift();            
                row--;
            }
        }
    }
    
    return answer;
    
}

let dr = [0,0,1,1];
let dc = [0,1,0,1];
function checkBlock(board,v,row,col){
    let value = board[row][col];
    if(value == 0) return false;
    
    for(let i=1;i<dr.length;i++){
        if(value !== board[row+dr[i]][col+dc[i]]){
            return false;
        }
    }
    
    for(let i=0;i<dr.length;i++){
        v[row+dr[i]][col+dc[i]] = 1;
    }
    
    return true;
}

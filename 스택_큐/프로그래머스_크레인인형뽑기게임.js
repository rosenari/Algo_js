function solution(board, moves) {
    let answer = 0;
    let cols = board[0].length;
    let stacks = [];
    let baguni = [];
    
    for(let i=0;i<cols;i++){
        stacks.push([]);
    }
    
    //게임화면에서 각각의 열들을 스택으로 변환한다.
    for(let i=0;i<cols;i++){//열
        for(let j=board[i].length-1;j>=0;j--){//행
            if(board[j][i]!==0) stacks[i].push(board[j][i]);
        }    
    }
    
    //명령을 수행한다.
    for(let i=0;i<moves.length;i++){
        let index = moves[i]-1;//1이면 0번째 인덱스 스택
        if(stacks[index].length > 0){
            let item = stacks[index].pop();//뽑은 인형
            if(baguni.length > 0){
                let top = baguni[baguni.length-1]; //바구니 최상단 인형
                if(item == top){//같다면 바구니에서 인형 제거
                    baguni.pop();
                    answer+=2; //제거된 인형은 2개이다.
                }
                else baguni.push(item); //다르다면 바구니 제일 위에 넣기
            }else{
                baguni.push(item);
            }
        }
    }
    
    return answer;    
}

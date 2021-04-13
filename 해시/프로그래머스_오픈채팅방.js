function solution(record) {
    var answer = [];
    let store = {};
    
    for(let i=0;i<record.length;i++){
        let arr = record[i].split(" ");
        let cmd = arr[0];
        let id = arr[1];
        let nickname = arr[2];
        
        if(cmd=="Enter"){
            store[id] = nickname;
            answer.push([id,`${id}님이 들어왔습니다.`]);
        }else if(cmd=="Leave"){
            answer.push([id,`${id}님이 나갔습니다.`]);
        }else {
            store[id] = nickname;
        }
    }
    
    for(let i=0;i<answer.length;i++) {
        answer[i] = answer[i][1].replace(answer[i][0],store[answer[i][0]]);
    }
        
    return answer;
}

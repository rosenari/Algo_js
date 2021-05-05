function solution(k, room_number) {
    let p = new Map();
    let answer = [];
    for(let i=0;i<room_number.length;i++){
        let parent = find(p,room_number[i]);
        answer.push(parent);
        p.set(parent,parent+1);
    }
    
    return answer;
}
function find(p,x){
    if(!p.has(x)) return x;
    let parent = find(p,p.get(x));
    p.set(x,parent);
    return parent;
}

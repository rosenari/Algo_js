function solution(gems) {
    let answers = [];
    let start = 0;
    let end = 0;
    let N = gems.length;
    let target = new Set();
    for(let i=0;i<gems.length;i++){
        if(!target.has(gems[i])) target.add(gems[i]);
    }
    let now = new Map();
    now.set(gems[0],1);
    while(end < N){
        if(now.size==target.size){
            answers.push([start,end]);
            if(now.has(gems[start])){
                let data = now.get(gems[start]);
                if(data > 1) now.set(gems[start],data-1);
                else now.delete(gems[start]);
            }
            start++;
        }else{
            end++;
            if(!now.has(gems[end])) now.set(gems[end],1);
            else now.set(gems[end],now.get(gems[end])+1);
        }
    }
    
    answers.sort((a,b)=> {
        if((a[1]-a[0]) === (b[1]-b[0])){
            return a[0]-b[0];
        }else{
            return (a[1]-a[0]) - (b[1]-b[0]);
        }
    })
    let answer = answers.shift();
    
    return [(+answer[0])+1,(+answer[1])+1]
}

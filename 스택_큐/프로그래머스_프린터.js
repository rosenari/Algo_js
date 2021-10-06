function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((p,i) => ({ p, i }));
    while(queue.length > 0){
        const { p, i } = queue.shift();
        if(queue.filter(v => v.p > p).length > 0) queue.push({ p, i });
        else{
            answer++;
            if(i == location) break;
        }
    }
    return answer;
}

function solution(priorities, location) {
    let answer = 1;
    priorities = priorities.map((v, i) => ({ loc: i, priority: v }));
    
    while(priorities.length > 0) {
        const { loc, priority } = priorities.shift();
        
        if(priorities.filter(v => priority < v.priority).length) {
            priorities.push({ loc, priority });
            continue;
        }
        
        if (loc === location) {
            return answer;
        } else {
            answer++;
        }
    }
}

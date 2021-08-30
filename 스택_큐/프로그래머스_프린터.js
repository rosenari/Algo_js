//프로그래머스 LEVEL2

function solution(priorities, location) {
    let answer = 1;
    priorities = priorities.map((priority, index) => [priority, index]);
    while(priorities.length > 0) {
        const current = priorities.shift();
        if(priorities.find(priority => current[0] < priority[0])){
            priorities.push(current);
        }else{
            if(current[1] === location) break;
            answer++;
        }
    }
    return answer;
}

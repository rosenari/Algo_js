//level1

function solution(participant, completion) {
    let answer = 'nothing';
    const map = new Map();
    completion.forEach(human => map.set(human, (map.get(human) || 0) + 1));
    participant.forEach(human => {
        const num = map.get(human) || 0;
        if(!num){
            answer = human;
            return false;
        }
        map.set(human, num - 1);
    });
    return answer;
}

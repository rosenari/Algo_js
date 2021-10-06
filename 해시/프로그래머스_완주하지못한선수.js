function solution(participant, completion) {
    let answer = '';
    const map = new Map();
    participant.forEach(p => {
        map.set(p, (map.get(p) || 0) + 1);
    });
    completion.forEach(c => {
        map.set(c, map.get(c) - 1);
    });
    map.forEach((v, k) => {
        if(v > 0) answer = k;
    });
    return answer;
}

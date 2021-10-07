function solution(answers) {
    const humans = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    .map((v, id) => ({ pattern: v, id: id + 1, matchCnt: 0}));
    answers.forEach((answer, i) => {
        humans.forEach(h => {
            if(h.pattern[i%h.pattern.length]===answer) h.matchCnt += 1;
        });
    });
    const max = Math.max(...humans.map(h => h.matchCnt));
    return humans.filter(h => h.matchCnt === max).map(h => h.id);
}

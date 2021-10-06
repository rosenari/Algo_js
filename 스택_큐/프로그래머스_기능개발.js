function solution(progresses, speeds) {
    const answer = [];
    progresses.forEach((p,i) => {
        const deplay = Math.ceil((100 - p) / speeds[i]);
        if(answer.length == 0) answer.push({ deplay ,cnt: 1 });
        else{
            if(answer[answer.length - 1].deplay >= deplay) answer[answer.length - 1].cnt += 1;
            else answer.push({ deplay ,cnt: 1 });
        }
    });
    return answer.map(v => v.cnt);
}

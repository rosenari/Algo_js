function solution(progresses, speeds) {
    const answer = [];
    progresses.reduce((max, progress, index) => { 
        const remain = Math.ceil((100 - progress) / speeds[index]);
        if((max < remain) && answer.push(1)) return remain;
        answer[answer.length - 1] += 1;
        return max;
    }, -1);
    return answer;
}

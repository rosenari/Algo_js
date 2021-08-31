function solution(jobs) {
    const N = jobs.length;
    let answer = 0;
    let prevLast = 0;
    const queue = [];
    jobs.sort((a, b) => a[0] - b[0]);
    while(jobs.length > 0 || queue.length > 0){
        jobs.filter(job => prevLast >= job[0]).forEach(job => queue.push(job));
        jobs = jobs.filter(job => prevLast < job[0]);
        if(queue.length > 0){
            queue.sort((a, b) => a[1] - b[1]);
            const currentJob = queue.shift();
            prevLast += currentJob[1];
            answer += prevLast - currentJob[0];
        }else{
            prevLast = jobs[0][0];
        }
    }
    answer = parseInt(answer / N);
    return answer;
}

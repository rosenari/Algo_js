function solution(jobs) {
    const N = jobs.length;
    const queue = [];
    let sum = 0, endtime = 0;
    jobs.sort((a,b) => a[0] - b[0]); //요청시간순으로 정렬
    while(jobs.length > 0 || queue.length > 0) { //작업목록과 준비큐가 모두 비어야 작업이 종료
        jobs.filter(job => job[0] <= endtime).forEach(job => queue.push(job)); //남은 작업들 중 요청시간이 현재 진행중인 작업의 종료시간보다 앞서거나 같은 작업들은 모두 준비큐에 넣는다.
        jobs = jobs.filter(job => job[0] > endtime); //현재 진행 중인 작업의 종료시간보다 요청시간이 뒤에있는 작업들은 남겨둔다.
        if(queue.length > 0) { //준비큐가 비어있지 않다면,
            queue.sort((a,b) => a[1] - b[1]); //작업 소요시간 순으로 정렬
            const job = queue.shift(); //작업을 하나 꺼내어 진행
            endtime += job[1]; //현재 진행 중인 작업의 종료시간 갱신
            sum += (endtime - job[0]); //마지막에 평균을 구하기위해 현재 작업의 요청부터 종료까지 걸리는 시간을 더함
        }else {
            endtime = jobs[0][0]; //준비큐가 비어있다면, 준비작업의 요청시간으로 갱신, 그래야 남은 작업들을 임시큐에 계속해서 넣을 수 있음.
        }
    }
    
    return Math.floor(sum / N);
}

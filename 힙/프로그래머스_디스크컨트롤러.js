function solution(jobs) {
    let N = jobs.length;
    //요청시간으로 오름차순 정렬
    jobs.sort((a,b) => a[0]-b[0]);
    
    let answer = 0;
    let last = 0;
    
    let queue = [];
    while(jobs.length > 0 || queue.length > 0){
        
        while(jobs.length > 0){
            let job2 = jobs[0];
            if(last >= job2[0]){
                queue.push(jobs.shift());
            }else{
                break;
            }
        }
        
        if(queue.length >0){
            queue.sort((a,b) => {
                return (last+a[1]-a[0])-(last+b[1]-b[0])
            });
            let job2 = queue.shift();
            last += job2[1];
            answer += (last-job2[0]);
        }else {
            last =jobs[0][0];
        }
    }
    
    return parseInt(answer/N);
}

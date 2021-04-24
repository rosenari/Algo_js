function solution(progresses, speeds) {
    let arr = [];
    for(let i=0;i<progresses.length;i++){
        let remain = Math.ceil((100-progresses[i])/speeds[i]);
        if(arr.length > 0 && arr[arr.length-1][0]>=remain) arr[arr.length-1][1]+=1;
        else arr.push([remain,1]);
    }
    let answer = [];
    for(let i=0;i<arr.length;i++) answer.push(arr[i][1]);
    
    return answer;
}

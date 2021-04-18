function solution(N, stages) {
    let failure = new Array(N);
    
    for(let i=1;i<=N;i++){
        failure[i] = [i,0];
    }
    
    for(let i=1;i<=N;i++){
        let sum = 0;
        let fail = 0;
        for(let j=0;j<stages.length;j++){
            if(stages[j]>=i) sum+=1;
            if(stages[j]==i) fail+=1;
        }
        failure[i][1] = fail/sum;
    }
    
    failure.sort((a,b) => {
        return b[1] - a[1];
    })
    
    let answer = [];
    for(let i=0;i<N;i++){
        answer.push(failure[i][0]);
    }
    
    return answer;
}

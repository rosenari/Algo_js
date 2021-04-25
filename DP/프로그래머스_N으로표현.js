function solution(N, number) {
    if(number==N) return 1;
    
    let dp = [new Set([])];
    
    let num = N;
    for(let i=1;i<=8;i++){
        dp.push(new Set([num]));
        num += N*Math.pow(10,i);
    }
    
    for(let n=2;n<=8;n++){
        
        for(let s=1;s<n;s++){
            for(let v of dp[s]){
                for(let v2 of dp[n-s]){
                    dp[n].add(v+v2);
                    dp[n].add(v-v2);
                    dp[n].add(v*v2);
                    if(v2!==0) dp[n].add(v/v2);
                }
            }
        }
        
        
        if(dp[n].has(number)) return n;
    }
    
    return -1;
}

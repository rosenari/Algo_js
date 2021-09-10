function solution(N, number) {
    const MAX = 8;
    if(N === number) return 1;
    const dp = Array.from({length: MAX + 1}).map((_, i) => new Set([parseInt(`${N}`.repeat(i))]));
    for(let n = 2; n < dp.length; n++) {
        for(let s = 1; s < n; s++){
            for(const v1 of dp[s]){
                for(const v2 of dp[n-s]){
                    dp[n].add(v1 + v2);
                    dp[n].add(v1 - v2);
                    dp[n].add(v1 * v2);
                    if(v2 !== 0) dp[n].add(parseInt(v1 / v2));
                }
            }
        }
        if(dp[n].has(number)) return n;
    }
    if(parseInt(`${N}`.repeat(MAX)) === number) return MAX;
    return -1;
}

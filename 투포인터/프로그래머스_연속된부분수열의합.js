function solution(sequence, k) {
    const answer = [], n = sequence.length;
    let s = 0, e = 0, sum = 0
    while (e <= n) {
         if(sum > k) {
            sum -= sequence[s++];
        } else {
            sum += sequence[e++];
        }
        
        if(k === sum) {
            answer.push([s, e - 1]);
        }
    }
    
    return answer.sort((a, b) => {
        const diffA = a[1] - a[0];
        const diffB = b[1] - b[0];
        
        if (diffA === diffB) {
            return a[0] - b[0];
        }
        
        return diffA - diffB;
    })[0];
}

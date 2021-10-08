function solution(gems) {
    let s = 0, e = 0;
    const answer = [];
    const set = new Set(gems);
    const now = new Map();
    now.set(gems[s], 1);
    while(e < gems.length){
        if(now.size === set.size){
            const num = now.get(gems[s]);
            if(num > 1) now.set(gems[s], num - 1);
            else now.delete(gems[s]);
            answer.push([s + 1, e + 1]);
            s++;
        }else {
            e++;
            const num = now.get(gems[e]) || 0;
            now.set(gems[e], num + 1);
        }
    }
    return answer.sort((a, b) => ((a[1] - a[0]) - (b[1] - b[0])))[0];
}

function solution(citations) {
    for (let h = 10000; h >= 0; h--) {
        const refCnt = citations.filter(citation => citation >= h).length;
        const restCnt = citations.length - refCnt;
        if (refCnt >= h && restCnt <= h) return h;
    }
}

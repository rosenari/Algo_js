function solution(citations) {
    let answer = 0;
    const Max = citations.sort((a,b) => b - a)[0];
    Array.from({length:Max + 1}).forEach((_, h) => {
        const n = citations.filter(c => c >= h).length;
        if(n >= h && citations.length - n <= h) answer = h
    });
    return answer;
}

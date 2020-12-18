//프로그래머스 LEVEL2
function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => a - b);
    for (let i = citations[citations.length - 1]; i >= 0; i--) {
        let gt = 0;
        for (let j = 0; j < citations.length; j++) {
            if (citations[j] >= i) {
                gt++;
            }
        }
        if (gt >= i && citations.length - gt <= i) {
            answer = i;
            break;
        }
    }

    return answer;
}
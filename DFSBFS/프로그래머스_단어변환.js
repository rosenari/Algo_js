let answer = Infinity;
function solution(begin, target, words) {
    const v = Array(words.length).fill(false);
    dfs(begin, target, v, words, 0);
    
    return answer === Infinity ? 0 : answer;
}

function dfs(begin, target, v, words, count) {
    if (count >= answer) return;
    
    if (begin === target) {
        answer = count;
        return;
    }
    
    for (let i = 0 ; i < words.length; i++) {
        const word = words[i];
        if (!v[i] && diff_count(begin, word) === 1) {
            v[i] = true;
            dfs(word, target, v, words, count + 1);
            v[i] = false;
        }
    }
}

function diff_count(begin, target) {
    return Array.from(begin).filter((v, i) => v !== target[i]).length;
}

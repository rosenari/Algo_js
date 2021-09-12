let min = Infinity;
function solution(begin, target, words) {
    const v = Array.from({length: words.length}).fill(false);
    DFS(0, begin, target, words, v);    
    return min !== Infinity ? min : 0;
}

function DFS(cnt, begin, target, words, v){
    if(begin === target) {
        min = Math.min(min, cnt);
        return;
    }
    
    for(let i in words){
        const word = words[i];
        if(!v[i] && diff(begin, word)){
            v[i] = true;
            DFS(cnt + 1, word, target, words, v);
            v[i] = false;
        }
    }
}

function diff(begin, word){
    const cword = word.split('');
    return (begin.split('').filter((v,i) => v !== cword[i]).length) === 1;
}

function solution(begin, target, words) {
    v = new Array(words.length).fill(false);
    DFS(begin, target, words, 0);

    if (answer == 987654321) answer = 0;
    return answer;
}
let answer = 987654321;
let v;
let DFS = (word, target, words, cnt) => {
    if (word == target) {
        answer = Math.min(answer, cnt);
    }

    for (let i in words) {
        if (!v[i] && isChange(word, words[i])) {
            v[i] = true;
            DFS(words[i], target, words, cnt + 1);
            v[i] = false;
        }
    }

}
let isChange = (word, target) => {
    let arr = Array.from(word);
    let arr2 = Array.from(target);

    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr2[i]) cnt++;
    }

    if (cnt == 1) return true;

    return false;
}
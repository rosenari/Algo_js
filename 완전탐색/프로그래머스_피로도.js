let answer = 0;
function solution(k, dungeons) {
    const v = new Array(dungeons.length).fill(false);
    Permutation(v, k, dungeons, 0);
    return answer;
}

function Permutation(v, energe, dungeons, clear) {
    if (answer <= clear) answer = clear;
    
    for (let i = 0; i < dungeons.length; i++) {
        const [min, spend] = dungeons[i];
        if (!v[i] && energe >= min) {
            v[i] = true;
            Permutation(v, energe - spend, dungeons, clear + 1);
            v[i] = false;
        }
    }
}

const already = new Set();
function solution(numbers) {
    const answer = new Set();
    const N = numbers.length;
    const v = new Array(numbers.length).fill(false);
    for(let i=1;i<=N;i++){
        v.fill(false);
        nPr(answer, i, new Array(i), numbers, v, 0);
    }
    return answer.size;
}
function nPr(answer, r, space, numbers, v, cnt){
    if(cnt === r){
        const prime = parseInt(space.join(''));
        if(already.has(prime)) return;
        if(isPrime(prime)) answer.add(prime);
        already.add(prime);
        return;
    }
    
    for(let i=0;i<numbers.length;i++){
        if(v[i]) continue;
        v[i] = true;
        space[cnt] = numbers[i];
        nPr(answer, r, space, numbers, v, cnt + 1);
        v[i] = false;
    }
}

function isPrime(number){
    if(number === 0 || number === 1) return false;
    const isNot = new Array(number + 1).fill(false);
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(isNot[i]) continue;
        for(let j = i + i;j <= number; j+=i) {
            isNot[j] = true;
        }
    }
    return !isNot[number];
}

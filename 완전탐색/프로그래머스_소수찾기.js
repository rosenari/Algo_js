const prime = new Set();
const nums = new Set();
function solution(numbers) {
    Array.from({length:numbers.length})
        .forEach((_, i) => nPr('', i + 1, 0, numbers, new Array(numbers.length).fill(false)));
    return prime.size;
}

function nPr(sum, r, cnt, numbers, v){
    if(cnt == r){
        const num = parseInt(sum);
        if(nums.has(num)) return;
        if(isPrime(num)) prime.add(num);
        nums.add(num);
        return;
    }
    
    for(const i in numbers){
        if(v[i]) continue;
        v[i] = true;
        nPr(sum + numbers[i], r, cnt + 1, numbers, v);
        v[i] = false;
    }
}

function isPrime(num){
    const isNot = new Array(num + 1).fill(false);
    Array.from({length:2}).forEach((_, i) => isNot[i] = true);
    
    for(let i=2;i<=Math.sqrt(num);i++){
        if(isNot[i]) continue;
        for(let j = i + i; j <= num; j += i){
            isNot[j] = true;
        }
    }
    
    return !isNot[num];
}

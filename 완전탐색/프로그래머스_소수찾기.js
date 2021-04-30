let sets = new Set();
let map = {};
function solution(numbers) {
    let N = numbers.length;
    let v = new Array(N);
    numbers = numbers.split("");
    for(let i=1;i<=N;i++){
        v.fill(false);
        Permutation(0,i,"",numbers,v);
    }
    return sets.size;
}

function Permutation(cnt,target,num,numbers,v){
    if(cnt==target){
        if(!map[parseInt(num)]) map[parseInt(num)] = true;
        else return;
            
        if(isPrime(parseInt(num))) sets.add(parseInt(num));
        return;
    }
    
    for(let i=0;i<numbers.length;i++){
        if(v[i]) continue;
        v[i] = true;
        Permutation(cnt+1,target,num+numbers[i],numbers,v);
        v[i] = false;
    }
}

function isPrime(number){
    if(number == 0 || number == 1) return false;
    
    let isNot = new Array(number+1).fill(false);
    
    for(let i=2;i<=Math.sqrt(number);i++){
        if(isNot[i]) continue;
        
        for(let j=i+i;j<=number;j+=i){
            isNot[j] = true;
        }
    }
    
    return !isNot[number];
}

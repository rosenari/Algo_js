function solution(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    const arr = Array.from({length:n});
    arr[0] = 1;
    arr[1] = 2;
    for(let i=2;i<n;i++){
        arr[i] = (arr[i-1] + arr[i-2]) % 1000000007
    }
    return arr[n-1];
}

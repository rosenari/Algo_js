function solution(n, arr1, arr2) {
    let answer = [];
    for(let i=0;i<n;i++){
        let binary = (arr1[i] | arr2[i]).toString(2);
        while(binary.length<n) binary = "0"+binary;
        for(let i=0;i<n;i++){
            binary=binary.replace("0"," ",i);
            binary=binary.replace("1","#",i);
        }
        answer.push(binary);
    }
    return answer;
}

function solution(str1, str2) {
    var answer = 0;
    let A = {};
    let B = {};
    let min = {};
    let max = {};
                
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    
    extractElem(arr1,A);
    extractElem(arr2,B);

    if(Object.keys(A).length == 0 && Object.keys(B).length == 0) return 65536;
    
    for(let key in A){
        if(B[key]){
            min[key] = A[key] < B[key] ? A[key] : B[key];
            max[key] = A[key] > B[key] ? A[key] : B[key];
        }
        else max[key] = A[key]
    }    
    
    for(let key in B){
        if(A[key]){
            min[key] = A[key] < B[key] ? A[key] : B[key];
            max[key] = A[key] > B[key] ? A[key] : B[key];
        }
        else max[key] = B[key]
    }
    
    
    let minSum = 0;
    for(let k in min){
        minSum +=min[k];
    }
    let maxSum = 0;
    for(let k in max){
        maxSum +=max[k];
    }
    
    return parseInt((minSum/maxSum)*65536);
}

function extractElem(arr,S){
    for(let i=0;i<arr.length-1;i++){
        let str = arr[i]+arr[i+1];
        str = str.toUpperCase();
        if(!/[A-Z]{2}/i.test(str)) continue;
        if(!S[str]) S[str] = 1;
        else S[str]+=1;
    }
}

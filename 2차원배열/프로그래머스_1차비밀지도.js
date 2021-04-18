function solution(n, arr1, arr2) {
    
    for(let i=0;i<n;i++){
        arr1[i] = arr1[i].toString(2).split("");
        
        while(arr1[i].length < n) arr1[i].unshift('0');
        
        arr2[i] = arr2[i].toString(2).split("");
        
        while(arr2[i].length < n) arr2[i].unshift('0');
    }
    
    let matrix = [];
    
    for(let i=0;i<n;i++){
        matrix.push(new Array(n).fill(""));
        for(let j=0;j<n;j++){
            if(arr1[i][j]=='1' || arr2[i][j]=='1') matrix[i][j] = '#';
            else matrix[i][j] = ' ';
        }
    }
    
    for(let i=0;i<n;i++){
        matrix[i] = matrix[i].join("");
    }
    
    return matrix;
}

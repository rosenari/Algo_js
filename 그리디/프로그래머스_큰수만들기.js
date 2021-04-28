function solution(number, k) {
    number = number.split("");
    let stack = [];
    for(let i=0;i<number.length;i++){
        while(k > 0 && stack[stack.length -1] < number[i]){
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    if(k > 0) stack = stack.slice(0,stack.length - k);
    
    return stack.join("");
}

function solution(s)
{
    let stack = [];
    for(let i=0;i<s.length;i++){
        let len = stack.length;
        if(len == 0 || stack[len-1]!==s[i]) stack.push(s[i]);
        else stack.pop();
    }
    
    if(stack.length > 0) return 0;
    
    return 1;
    
}

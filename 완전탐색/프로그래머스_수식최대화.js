function solution(expression) {
    let regex = /([\-\*\+])/gi;
    expression = expression.split(regex);
    let op = [];
    for(let i=0;i<expression.length;i++){
        if(regex.test(expression[i]) && op.indexOf(expression[i])==-1){
            op.push(expression[i]);
        }
    }
    let v = new Array(op.length).fill(false);
    nPr(0,expression,op,v,[]);
    
    return answer;
}

let answer = 0;
function nPr(cnt,expression,op,v,priority){
    if(cnt==op.length){
        let temp = [...expression];
        for(let o of priority){
            for(let i=0;i<temp.length;i++){
                if(temp[i]==o && temp[i]=='*'){
                    temp[i-1]= temp[i-1]*temp[i+1];
                    temp.splice(i,2);
                    i--
                }else if(temp[i]==o && temp[i]=='-'){
                    temp[i-1]= temp[i-1]-temp[i+1];
                    temp.splice(i,2);
                    i--
                }else if(temp[i]==o && temp[i]=='+'){
                    temp[i-1]= (+temp[i-1])+(+temp[i+1]);
                    temp.splice(i,2);
                    i--
                }
            }
        }
        answer = Math.max(answer,Math.abs(temp[0]));
        return
    }
    
    for(let i=0;i<op.length;i++){
        if(v[i]) continue;
        v[i] = true;
        priority.push(op[i]);
        nPr(cnt+1,expression,op,v,priority);
        priority.pop();
        v[i] = false;
    }
}

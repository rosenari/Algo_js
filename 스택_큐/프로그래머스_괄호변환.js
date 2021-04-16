function solution(p) {
    var answer = '';
    
    answer = change(p);
    
    return answer;
}

function change(p){
    if(p=="") return "";
    
    let strings = p.split("");
    
    let u=""; 
    let v=""; 
    let count = [0,0];
    
    for(let index=0;index<strings.length;index++){
        if(strings[index]=="(") count[0]+=1;
        else count[1]+=1;

        u+=strings[index];
                
        if(count[0] > 0 && count[0]==count[1]){                
            if(index<strings.length-1) v = strings.slice(index+1,strings.length).join("");
            break;
        }        
    }
    
    if(isCorrect(u)) return u + change(v);
    else{
        let result = "(" + change(v) + ")";
        u = u.slice(1,u.length-1).split("");
        for(let i=0;i<u.length;i++){
            if(u[i]=="(") u[i]=")";
            else u[i]="(";
        }        
        
        result += u.join("");
            
        return result;
    }
}

function isCorrect(u){
    let stack = [];
    let arr= u.split("");
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="("){
            stack.push(arr[i]);
        }else{
            if(stack.length == 0) return false;
            else{
                if(stack[stack.length-1]=="(") stack.pop();
                else return false;
            }
        }
    }
    
    if(stack.length > 0) return false;
    
    return true;
}

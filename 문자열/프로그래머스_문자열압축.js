function solution(s) {
    let answer = 987654321;
    let N = s.length;
    let list = [];
    let count = [];
    
    if(N==1){
        return 1;
    }
    
    for(let n=1;n<N;n++){
        list = [];
        count = [];
        for(let i=0;i<N;i+=n){
            let str=s.slice(i,i+n);
            check(list,count,str);
        }
        let len = 0;
        for(let i=0;i<count.length;i++){
            if(count[i]==1){
                len+=list[i].length;
            }else{
                len+=(count[i]+list[i]).length;
            }
        }
        answer = Math.min(len,answer);
    }
    
    return answer;
}

function check(list,count,str){
        if(list.length > 0 && list[list.length-1]==str){
            count[list.length-1]+=1;
        }else{
            list.push(str);
            count.push(1);
        }
}

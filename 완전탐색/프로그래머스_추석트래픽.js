function solution(lines) {
    var answer = 0;
    
    let min = Infinity;
    let max = 0;
    for(let i=0;i<lines.length;i++){
        let str = lines[i].replace("s","").split(" ");
        let endTime = new Date(str[0]+" "+str[1]).getTime();
        let milisec = str[2] * 1000 - 1;
        let startTime = new Date(endTime - milisec).getTime();
        
        lines[i] = [startTime,endTime];
    }
    
    for(let i=0;i<lines.length;i++){
        let sum = 0;
        let time = lines[i][1];
        
        for(let j=i;j<lines.length;j++){
            
            if(time<=lines[j][1] && time>=lines[j][0]){
                sum++;
            }else if(lines[j][0]>=time && lines[j][1]<=(time+999)){
                sum++;
            }else if((time+999)<=lines[j][1] && (time+999)>=lines[j][0]){
                sum++;
            }
        }
        answer = Math.max(sum,answer);
    }
    
    return answer;
}

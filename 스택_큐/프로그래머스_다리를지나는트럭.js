function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = [];
    while(truck_weights.length > 0 || bridge.length > 0){
        let sum = 0;
        if(bridge.length > 0){
            for(let i=0;i<bridge.length;i++){
                let truck = bridge[i];
                truck[1]+=1;
                if(truck[1] >= bridge_length){
                    bridge.shift();
                    i--;
                }else{
                    sum+=truck[0];
                }
            }
        }
        
        if(truck_weights.length > 0){
            if(sum+truck_weights[0] <= weight && bridge.length < bridge_length){
                bridge.push([truck_weights.shift(),0]);
            }
        }
        
        answer++;
    }    
    return answer;
}

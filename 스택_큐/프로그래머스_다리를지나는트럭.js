function solution(bridge_length, weight, truck_weights) {
    let bridge = [];
    let answer = 0;
    while(bridge.length > 0 || truck_weights.length > 0){   
        if(bridge.length > 0){
            for(let i=0;i<bridge.length;i++){
                bridge[i][1]+=1;
            }
            if(bridge[0][1]>bridge_length) bridge.shift(); 
        }
        
        if(truck_weights.length > 0 
           && getWeight(bridge)+truck_weights[0]<=weight
           && bridge.length < bridge_length){
                bridge.push([truck_weights.shift(),1]);
        }
        
        answer++;
    }
    return answer;
}

function getWeight(bridge){
    let sum = 0;
    for(let truck of bridge){
        sum+=truck[0];
    }
    return sum;
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = [];
    while(truck_weights.length > 0 || bridge.length > 0){
        bridge = bridge.filter(truck => truck.time < bridge_length);
        if(truck_weights.length > 0 && (bridge.reduce((sum, truck) => sum + truck.weight, 0) + truck_weights[0]) <= weight && bridge.length < bridge_length){
            bridge.push({ weight: truck_weights.shift(), time: 0 });
        }
        bridge = bridge.map(truck => ({ ...truck, time: truck.time + 1 }));
        answer++;
    }
    return answer;
}

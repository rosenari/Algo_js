function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = [];
    while(truck_weights.length > 0 || bridge.length > 0) {
        bridge = bridge.filter(truck => truck[1] < bridge_length);
        bridge = bridge.map(truck => [truck[0], truck[1] + 1]);
        const bridge_weight = bridge.reduce((sum, truck) => sum + truck[0], 0);
        if(truck_weights.length > 0 && bridge_weight + truck_weights[0] <= weight) {
            if(bridge.length === 0 || bridge.length < bridge_length){
                bridge.push([truck_weights.shift(), 1]);
            }
        }
        answer++;
    }
    return answer;
}

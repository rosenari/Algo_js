//프로그래머스 LEVEL2
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    let trucks = truck_weights;
    while (bridge.length > 0 || trucks.length > 0) {
        let w = 0;
        let l = bridge.length;
        for (let i = 0; i < l; i++) {
            let v = bridge[i];
            v[1]++;
            if (v[1] > bridge_length) {
                bridge.shift();
                i--;
                l--;
            } else {
                w += v[0];
            }
        }
        if (bridge.length < bridge_length && trucks.length > 0 && trucks[0] + w <= weight) {
            bridge.push([trucks.shift(), 1]);
        }
        answer++;
    }
    return answer;
}
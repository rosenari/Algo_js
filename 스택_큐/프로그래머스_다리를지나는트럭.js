//프로그래머스 LEVEL2
function solution(bridge_length, weight, truck_weights) {
    let queue = [];
    let time = 0;
    while (queue.length > 0 || truck_weights.length > 0) {
        //다리에 트럭이 있다면 각 트럭의 시간을 1씩 증가시키고
        //시간이 다리길이만큼 경과할것을 전부 빼낸다.
        if (queue.length > 0) {
            for (let i = 0; i < queue.length; i++) {
                queue[i][1] += 1;
                if (queue[i][1] >= bridge_length) {
                    queue.splice(i, 1);
                    i--;
                }
            }
        }

        //트럭을 다리에 넣기전에 넣을수있는지 검사한다.
        //현재다리에 있는 트럭의 무게 + 대기트럭1의 무게 <= weight이라면
        //넣을수 있음
        if (truck_weights.length > 0) {
            //현재다리에 있는 트럭무게 구하기
            let sum = 0;
            queue.forEach((v) => {
                sum += v[0];
            });
            if (sum + truck_weights[0] <= weight) {
                queue.push([truck_weights.shift(), 0]);
            }
        }
        time++;
    }

    return time;
}
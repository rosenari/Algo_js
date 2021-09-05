function solution(name) {
    const N = name.length;
    let answer = 0, index = 0, offset = 0;
    name = Array.from(name);
    while(true){
        const result = BFS(index, name, new Array(N).fill(false), N);
        if(!result) break;
        
        [index, offset] = result;
        answer += offset;
    }
    return answer;
}

function BFS(startIndex, name, v, N){
    const queue = [];
    v[startIndex] = true;
    queue.push([startIndex, 0]);
    while(queue.length > 0){
        const [index, offset] = queue.shift();
        if(name[index] === 'A'){
            if(!v[(index + 1) % N]){
                v[(index + 1) % N] = true;
                queue.push([(index + 1) % N, offset + 1]);
            }
            if(!v[index - 1 < 0 ? N - 1 : index - 1]){
                v[index - 1 < 0 ? N - 1 : index - 1] = true;
                queue.push([index - 1 < 0 ? N - 1 : index - 1, offset + 1]);
            }
        }else{
            const charDiff = Math.min(Math.abs(name[index].charCodeAt(0) - 'A'.charCodeAt(0)),
                                     Math.abs('Z'.charCodeAt(0) - name[index].charCodeAt(0) + 1));
            name[index] = 'A';
            return [index, offset + charDiff];
        }
    }
    
    return null;
}

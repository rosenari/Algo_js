function solution(maps) {
    const start = [0, 0, 1];
    const end = [maps.length - 1, maps[0].length - 1];
    const v = new Array(maps.length);
    for (let i = 0; i < v.length; i++) {
        v[i] = new Array(maps[i].length).fill(false);
    }
    
    return bfs(start, end, v, maps);
}

const dr = [0, -1, 0, 1];
const dc = [-1, 0, 1, 0];
function bfs(start, end, v, maps) {
    let result = -1;
    const queue = [start];
    v[0][0] = true;
    
    while(queue.length > 0) {
        const current = queue.shift();
        
        if(current[0] == end[0] && current[1] == end[1]) {
            return current[2];
        }
        
        for (let i = 0; i < 4 ;i ++) {
            const nr = current[0] + dr[i];
            const nc = current[1] + dc[i];
            
            if (nr < 0 || nc < 0 || nr > end[0] || nc > end[1] || v[nr][nc] || maps[nr][nc] == 0) {
                continue;
            }
            
            v[nr][nc] = true;
            queue.push([nr, nc, current[2] + 1]);
        }
    }
    
    return result;
}

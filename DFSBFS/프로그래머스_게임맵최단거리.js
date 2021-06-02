function solution(maps) {
    return BFS(maps);
}

let dr = [0,-1,0,1];
let dc = [-1,0,1,0];

function BFS(maps){
    let w = maps[0].length - 1;
    let h = maps.length - 1;
    let v = new Array(maps.length);
    
    for(let i=0;i<v.length;i++) v[i] = new Array(maps[0].length).fill(false);
    
    let queue = [[0,0,1]];
    v[0][0] = true;
    
    while(queue.length > 0){
        let pos = queue.shift();
        let r = pos[0];
        let c = pos[1];
        if(r==h && c==w){
            return pos[2];
        }
        
        for(let i=0;i<dr.length;i++){
            let nr = r+dr[i];
            let nc = c+dc[i];
            if(nr < 0 || nr > h || nc < 0 || nc > w || v[nr][nc] || maps[nr][nc]==0) continue;
            
            v[nr][nc] = true;
            queue.push([nr,nc,pos[2]+1]);
        }
    }
    
    return -1;
}

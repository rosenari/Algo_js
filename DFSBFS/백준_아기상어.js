const { count } = require('console');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Shark {
    constructor(r, c) {
        this.size = 2;
        this.eat = 0;
        this.r = r;
        this.c = c;
    }

}

let map = [];
let visited = [];
let N = 0;
const solution = (input) => {
    N = parseInt(input.shift());
    input.map((row) => {
        visited.push(new Array(N).fill(false));
        map.push(row.split(" ").map((v) => {
            return parseInt(v);
        }))
    });
    let shark = null;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 9) {
                map[i][j] = 0;
                shark = new Shark(i, j);
                break;
            }
        }
    }
    let before = -1;
    let count = 0;
    let ans = 0;
    while ((count = isFish(shark)) > 0) {
        vclear();
        ans += eat(shark);
        if (ans == before) {
            break;
        }
        before = ans;
    }

    console.log(ans);

}

const vclear = () => {
    visited.map((v) => {
        v.fill(false);
    })
}

let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];
const eat = (shark) => {
    let queue = [];
    queue.push([shark.r, shark.c, 0]);
    visited[shark.r][shark.c] = true;

    while (queue.length > 0) {
        let pos = queue.shift();
        let r = pos[0];
        let c = pos[1];
        let dist = pos[2];
        if (map[r][c] < shark.size && map[r][c] > 0) {
            map[r][c] = 0;
            shark.eat += 1;
            shark.r = r;
            shark.c = c;
            if (shark.eat == shark.size) {
                shark.eat = 0;
                shark.size += 1;
            }
            return dist;
        }

        for (let i = 0; i < dr.length; i++) {
            let nr = r + dr[i];
            let nc = c + dc[i];
            if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited[nr][nc] && map[nr][nc] <= shark.size) {
                visited[nr][nc] = true;
                queue.push([nr, nc, dist + 1]);
                queue.sort((a, b) => {
                    if (a[2] - b[2] > 0) {
                        return 1;
                    } else if (a[2] - b[2] < 0) {
                        return -1;
                    } else {
                        if (a[0] - b[0] > 0) {
                            return 1;
                        } else if (a[0] - b[0] < 0) {
                            return -1;
                        } else {
                            if (a[1] - b[1] > 0) {
                                return 1;
                            } else if (a[1] - b[1] < 0) {
                                return -1;
                            } else {
                                return 0;
                            }
                        }
                    }
                });
            }
        }
    }

    return 0;
}

const isFish = (shark) => {
    let cnt = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] < shark.size && map[i][j] > 0) {
                cnt++;
            }
        }
    }

    return cnt;
}


const input = [];
r1.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
})
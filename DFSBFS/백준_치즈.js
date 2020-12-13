const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const v = [];

const solution = (input) => {
    let first = input.shift().split(" ");
    let R = parseInt(first[0]);
    let C = parseInt(first[1]);
    let map = [];
    input.map((row, index) => {
        map.push(row.split(" ").map((value) => parseInt(value)));
        v.push(new Array(C).fill(false));
    });
    let time = 0;
    let before = 0;
    while (isCheeze(map)) {
        before = count(map);
        vinit();
        air(map);
        remove(map);
        time++;
    }

    console.log(time);
    console.log(before);

}

const vinit = () => {
    for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < v[i].length; j++) {
            v[i][j] = false;
        }
    }
}

const air = (map) => {
    DFS(0, 0, map);
}

let dr = [-1, 0, 1, 0];
let dc = [0, 1, 0, -1];
const DFS = (r, c, map) => {
    v[r][c] = true;

    for (let i = 0; i < dr.length; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];
        if (nr >= 0 && nr < map.length && nc >= 0 && nc < map[0].length) {
            if (!v[nr][nc]) {
                if (map[nr][nc] == 1) {
                    v[nr][nc] = true;
                    map[nr][nc] = -1;
                } else if (map[nr][nc] == 0) {
                    v[nr][nc] = true;
                    DFS(nr, nc, map);
                }
            }
        }
    }
}

const remove = (map) => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == -1) {
                map[i][j] = 0;
            }
        }
    }
}

const count = (map) => {
    let cnt = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                cnt++;
            }
        }
    }
    return cnt;
}

const isCheeze = (map) => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                return true;
            }
        }
    }
    return false;
}

let input = [];
r1.on('line', (line) => {
    input.push(line);
})
    .on('close', () => {
        solution(input);
        process.exit();
    });
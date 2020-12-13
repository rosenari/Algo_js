const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const solution = (input) => {
	const N = parseInt(input.shift());
	const dr = [-1, 0, 1, 0];
	const dc = [0, 1, 0, -1];
	const visited = [];

	const map = input.map((string, index) => {
		const row = Array.from(string).map((str) => parseInt(str));
		visited.push(new Array(N).fill(0));
		return row;
	});

	const DFS = (r, c) => {
		visited[r][c] = true;
		let cnt = 1;

		for (let i = 0; i < 4; i++) {
			let nr = r + dr[i];
			let nc = c + dc[i];
			if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
				if (!visited[nr][nc] && map[nr][nc] == 1) {
					cnt += DFS(nr, nc);
				}
			}
		}

		return cnt;
	};

	const ans = [];

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (map[i][j] == 1 && !visited[i][j]) {
				ans.push(DFS(i, j));
			}
		}
	}

	ans.sort((a, b) => { return b - a });

	console.log(ans.length);
	while (ans.length > 0) {
		console.log(ans.pop());
	}

}

const input = [];
r1.on('line', function (line) {
	input.push(line);
})
	.on('close', function () {
		solution(input);
		process.exit();
	});
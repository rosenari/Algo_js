//프로그래머스 LEVEL3

function solution(genres, plays) {
    var answer = [];
    let map = [];
    genres = genres.map((v) => '_' + v);

    genres.forEach((v, i) => {
        if (!map[v]) map[v] = plays[i];
        else map[v] += plays[i];
    });


    let song = [];
    plays.forEach((v, i) => {
        song.push([map[genres[i]], v, i, genres[i]]);
    });

    song.sort((a, b) => {
        if (b[0] - a[0] > 0) {
            return 1;
        } else if (b[0] - a[0] < 0) {
            return -1;
        } else {
            if (b[1] - a[1] > 0) {
                return 1;
            } else if (b[1] - a[1] < 0) {
                return -1;
            } else {
                return a[2] - b[2];
            }
        }
    });

    let before = '';
    let cnt = 0;
    while (song.length > 0) {
        let s = song.shift();

        if (before == s[3]) cnt++;
        else cnt = 0;

        if (cnt < 2) answer.push(s[2]);

        before = s[3];
    }

    return answer;
}
//프로그래머스 LEVEL2

function solution(clothes) {
    var answer = 1;
    let map = [];
    clothes.forEach((arr) => {
        if (!map[arr[1]]) map[arr[1]] = 1;
        else map[arr[1]]++;
    })

    for (let key in map) answer *= (map[key] + 1);

    return answer - 1;
}
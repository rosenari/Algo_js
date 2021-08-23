//프로그래머스 LEVEL2

function solution(clothes) {
    let answer = 1;
    const map = new Map();
    clothes.forEach(([name ,type]) => {
        map.set(type, (map.get(type) || 0) + 1);
    });
    map.forEach(num => {
        answer *= (num + 1);
    });
    return answer - 1;
}

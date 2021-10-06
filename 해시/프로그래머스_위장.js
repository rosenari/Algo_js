function solution(clothes) {
    let answer = 1;
    const map = new Map();
    clothes.forEach(([name, type]) => {
        map.set(type, (map.get(type) || 0) + 1);
    });
    map.forEach(v => {
        answer *= (v + 1);
    });
    return answer - 1;
}

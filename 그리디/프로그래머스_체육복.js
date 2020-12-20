//프로그래머스 LEVEL1

function solution(n, lost, reserve) {
    let answer = n;

    lost = lost.filter((v) => {
        const s = reserve.indexOf(v);
        reserve = reserve.filter((r) => v - r !== 0);

        return s === -1;
    });

    lost = lost.filter((v) => {
        const f = reserve.indexOf(v - 1);
        if (f !== -1) {
            reserve.splice(f, 1);
            return false;
        }
        const b = reserve.indexOf(v + 1);
        if (b !== -1) {
            reserve.splice(b, 1);
            return false;
        }

        return true;
    });

    answer -= lost.length;

    return answer;
}
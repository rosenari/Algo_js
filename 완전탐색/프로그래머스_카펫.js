function solution(brown, yellow) {
    let height = parseInt(brown / 2);
    while(height-- >= 0){
        const sum = brown + yellow;
        if(sum % height !== 0) continue;
        const width = parseInt(sum / height);
        if(width >= height && ((width - 2) * (height - 2)) === yellow) return [width, height]; //width - 2 * height - 2가 yellow 격자의 개수임도 확인해야함.
    }
}

function solution(routes) {
    let max = -30001;
    return routes.sort((pre, next) => pre[1] - next[1])
        .filter((route) => {
        if(route[0] > max) {
            max = route[1];
            return true;
        }
        return false;
    }).length;
}

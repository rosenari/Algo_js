function solution(routes) {
    let camera = -30001;
    let answer = 0;
    routes.sort((a, b) => a[1] - b[1]);
    routes.forEach(route => {
        if(camera < route[0]){
            camera = route[1];
            answer ++;
        }
    });
    return answer;
}

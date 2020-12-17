//프로그래머스 LEVEL3
let testCase = [[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]];
//테스트 케이스 OUTPUT 13

//* 조심해야할 사항 
//요청이 빠른순으로 정렬하는 것뿐만 아니라
//요청이 같은 시간에 들어온 경우 수행시간이 적은것 부터 처리해야한다.
//또한 작업중 들어온 요청작업들에 대해서는
//temp 배열에 넣어서 한번에 처리하면 중간에 end값이 바뀌는데 이떄마다
//새로운 작업이 걸릴수도 있기때문에 한번에 처리하면 안된다.


function solution(jobs) {
    let answer = 0;
    let end = 0;
    let N = jobs.length;

    jobs.sort((a, b) => {
        if (a[0] - b[0] > 0) {
            return 1;
        } else if (a[0] - b[0] < 0) {
            return - 1;
        } else {
            return a[1] - b[1];
        }
    });

    end = 0;
    let temp = [];
    while (jobs.length > 0 || temp.length > 0) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i][0] <= end) {
                temp.push(jobs[i]);
                jobs.splice(i, 1);
                i--;
            }
        }
        let job = null;
        if (temp.length > 0) {
            temp.sort((a, b) => {
                return a[1] - b[1];
            });
            job = temp.shift();
            end += job[1];
            answer += end - job[0];
        } else {
            job = jobs.shift();
            end = end + (job[0] - end) + job[1];
            answer += end - job[0];
        }
    }

    answer = parseInt(answer / N);

    return answer;
}

console.log(solution(testCase));
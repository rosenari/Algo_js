//테스트케이스
//numbers : [0, 5, 10, 15, 20]
//return : "52015100"

//numbers : [1000, 0, 5, 99, 100]
//return : "99510010000"

//numbers : [0, 0, 0, 0, 0]
//return : "0"

function solution(numbers) {
    var answer = '';
    let cnt = 0;
    let N = numbers.length;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            numbers.splice(i, 1);
            i--;
            cnt++;
        }
    }

    numbers.sort((a, b) => {
        return parseInt(b + '' + a) - parseInt(a + '' + b);
    });

    answer += numbers.join('');
    if (cnt == N) return "0";

    while (cnt != 0) {
        answer += '0';
        cnt--;
    }
    return answer;
}
function solution(numbers, target) {
    answer = 0;

    powerset(numbers, target, 0, 0);

    return answer;
}

let answer = 0;

let powerset = (numbers, target, cnt, result) => {
    if (cnt == numbers.length) {
        if (result == target) {
            answer++;
        }

        return;
    }

    powerset(numbers, target, cnt + 1, result + numbers[cnt]);
    powerset(numbers, target, cnt + 1, result - numbers[cnt]);

}
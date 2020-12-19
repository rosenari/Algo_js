//소수 판별함수

let isPrime = (num) => {
    let isNot = new Array(num + 1).fill(false);

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (isNot[i]) continue;

        for (let j = i + i; j <= num; j += i) {
            isNot[j] = true;
        }
    }

    if (isNot[num]) return false;
    return true;
}

console.log(isPrime(7918));
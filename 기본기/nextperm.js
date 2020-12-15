//넥스트 퍼뮤테이션 연습
//nPn

let testCase = [
    [1, 2, 3, 4, 5]
];

const nextPerm = (arr) => {
    let i = arr.length - 1;
    while (i > 0 && arr[i - 1] >= arr[i]) i--;
    if (i == 0) return false;

    let j = arr.length - 1;
    while (arr[i - 1] >= arr[j]) j--;

    swap(arr, i - 1, j);

    let k = arr.length - 1;
    while (i < k) {
        swap(arr, i++, k--);
    }

    return true;
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

testCase.forEach((arr) => {
    arr.sort();
    let cnt = 0;
    do {
        console.log(arr);
        cnt++;
    } while (nextPerm(arr));
    console.log("------total : " + cnt + "--------");
})


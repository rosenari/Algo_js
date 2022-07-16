function solution(nums) {
    const max = nums.length / 2;
    const typeCount = new Set(nums).size;
    return typeCount > max ? max : typeCount;
}

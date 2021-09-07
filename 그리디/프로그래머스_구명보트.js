function solution(people, limit) {
    let answer = 0, s = 0, e = people.length - 1;
    people.sort((a,b) => a - b);
    while(s <= e) {
        if(people[s] + people[e] <= limit){
            s++;
            e--;
        }else e--;
        answer++;
    }
    return answer;
}

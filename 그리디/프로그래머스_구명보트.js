function solution(people, limit) {
    people.sort((a,b) => b-a);
    let answer = 0;
    for(let i=0,j=people.length-1;i<=j;i++){
        let fat = people[i];
        let skinny = people[j];
        if(fat+skinny<=limit){
            answer++;
            j--;
        }else{
            answer++;
        }
    }
    return answer;
}

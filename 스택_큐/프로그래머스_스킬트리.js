function solution(skill, skill_trees) {
    let answer = 0;
    skill = skill.split("");
    skill = skill.reverse();

    for(let i=0;i<skill_trees.length;i++){
        let temp = [...skill];
        let arr = skill_trees[i].split("");
        let is = true;
        for(let j=0;j<arr.length;j++){
            let index = temp.indexOf(arr[j]);
            if(index==-1) continue;

            if(index==temp.length-1){
                temp.pop();
                continue;
            }

            is = false;
            break;
        }
        if(is){
            answer++;
        }
    }


    return answer;
}

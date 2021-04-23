function solution(genres, plays) {
    let genrePlays = {};
    let indexs = [];
    
    //장르별 플레이수 기록
    for(let key in genres){
        let genre = genres[key];
        if(!genrePlays[genre]) genrePlays[genre] = plays[key];
        else genrePlays[genre]+=plays[key];
        
        indexs.push(key);
    }
    
    indexs.sort((a,b)=> {
        if(genrePlays[genres[a]]==genrePlays[genres[b]]){
            if(plays[a]==plays[b]){
                return a - b;
            }else{
                return plays[b] - plays[a];
            }
        }else{
            return genrePlays[genres[b]] - genrePlays[genres[a]];
        }
    });
    
    let answer = [];
    for(let index of indexs){
        if(answer.length > 1 && genres[index] == genres[answer[answer.length-1]]
              && genres[index] == genres[answer[answer.length-2]]) continue;       
        else answer.push(parseInt(index));        
    }
    
    return answer;
}

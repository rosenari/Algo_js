function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    for(let i=0;i<cities.length;i++) cities[i]=cities[i].toUpperCase();
    for(let i=0;i<cities.length;i++){
        let index = cache.indexOf(cities[i]);
        if(index!==-1){
            cache.splice(index,1)
            cache.push(cities[i]);
            answer++;
        }else{
            if(cache.length == cacheSize){
                cache.shift();
            }
            if(cache.length < cacheSize) cache.push(cities[i]);
            answer+=5;
        }
    }
    return answer;
}

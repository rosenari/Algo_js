function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    
    for(let i=0;i<cities.length;i++){
        let city = cities[i].toUpperCase();
        if(cache.indexOf(city)!==-1) answer+=1;
        else answer+=5;
        
        LRU(cache,cacheSize,city);
    }
    
    return answer;
}

function LRU(cache,size,city){
    if(size==0) return;
    
    if(cache.length == 0){
        cache.push(city);
        return;
    }
    
    let index = cache.indexOf(city)
    if(index!==-1){
        cache.splice(index,1);
        cache.push(city);
    }else{
        if(cache.length < size){
            cache.push(city);
        }else{
            cache.shift();
            cache.push(city);
        }
    }
}

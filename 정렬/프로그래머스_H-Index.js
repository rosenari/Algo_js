function solution(citations) {
    citations.sort((a, b) => b - a);
    for (let h = citations[0]; h >= 0; h--){
        let k = 0;
        for(const citation of citations){
            if(citation >= h) k++;
        }
        if(k >= h){
            return h;
        }
    }
}

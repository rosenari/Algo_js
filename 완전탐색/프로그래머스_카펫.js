function solution(brown, yellow) {
    for(let w=1;w<=parseInt(brown/2);w++){
        for(let h=1;h<=w;h++){
            if(w*h==brown+yellow && (w+h)*2-4==brown) return [w,h];
        }
    }
}

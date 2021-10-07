function solution(brown, yellow) {
    for(let w = 3; w <= 5000; w++){
        for(let h = w; h >= 3; h--){
            if(w * h == brown + yellow && (w - 2) * (h - 2) == yellow){
               return [w, h];
            }
        }
    }
    return [];
}

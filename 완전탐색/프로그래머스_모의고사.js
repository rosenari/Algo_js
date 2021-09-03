function solution(answers) {
    const soopojas = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    .map((v, index) => ({ pattern: v, correct: 0, index: index + 1 }));
    answers.map((answer, index) => {
        soopojas.forEach(soopoja => {
            if(answer === soopoja.pattern[index % soopoja.pattern.length]) soopoja.correct += 1;
        });
    });
    const max = Math.max(...[...soopojas].map(soopoja => soopoja.correct));
    return soopojas.filter(soopoja => soopoja.correct === max).map(v => v.index);
}

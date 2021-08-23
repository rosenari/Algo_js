//level 3
function solution(genres, plays) {
    const map = new Map();
    return plays.map((play, index) => {
        const genre = genres[index];
        map.set(genre, (map.get(genre) || 0) + play);
        return {
            play,
            index,
            genre
        };
    }).sort((a, b) => {
        const genreA = map.get(a.genre);
        const genreB = map.get(b.genre);
        if(genreA > genreB){
            return -1;
        }else if(genreA < genreB){
            return 1;
        }else{
            if(a.play > b.play){
                return -1;
            }else if(a.play < b.play){
                return 1;
            }else{
                return a.index - b.index;
            }
        }
    }).reduce((answer, plays) => {
        const { genre, index } = plays;
        if(answer.filter(plays => plays.genre === genre).length == 2) return answer;
        answer.push({ genre, index });
        return answer;
    }, []).map(plays => plays.index);
}

function solution(genres, plays) {
    const answer = [];
    const gplays = new Map();
    let songs = genres.map((genre, id) => {
        gplays.set(genre, (gplays.get(genre) || 0) + plays[id]);    
        return {
            id,
            genre,
            play: plays[id]
        }
    });
    songs = songs.map(song => {
        return {
            ...song,
            gplay : gplays.get(song.genre)
        }
    });
    songs.sort((a,b) => {
        if(b.gplay == a.gplay){
            if(b.play == a.play){
                return a.id - b.id;
            }
            return b.play - a.play;
        }
        return b.gplay - a.gplay;
    });
    songs.forEach(song => {
        if((answer.filter(v => v.genre===song.genre).length) < 2) answer.push(song);
    });
    return answer.map(v => v.id);
}

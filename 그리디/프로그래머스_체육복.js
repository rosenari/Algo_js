function solution(n, lost, reserve) {
    reserve.sort((a, b) => a - b);
    reserve = reserve.filter(r => {
        const rental = lost.find(l => l === r);
        if(rental) lost = lost.filter(l => l !== rental);
        return !rental;
    });
    reserve.forEach(r => {
            const rental = lost.find(l => l === r - 1) || lost.find(l => l === r + 1);
            if(rental) lost = lost.filter(l => l !== rental);
    });
    return n - lost.length;
}

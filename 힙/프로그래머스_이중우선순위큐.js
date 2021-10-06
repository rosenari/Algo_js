function solution(operations) {
    const queue = [];
    operations.forEach(op => {
        const [cmd, num] = op.split(' ');
        if(cmd === 'I'){
            queue.push(+num);
            queue.sort((a,b) => a - b);
        }else {
            if(num === '1') queue.pop();
            else queue.shift();
        }
    });
    const max = queue.pop() || 0;
    const min = queue.shift() || max;
    return [max, min];
}

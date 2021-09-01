function solution(operations) {
    const queue = [];
    operations.forEach(op => {
        const [cmd, num] = op.split(' ');
        if(cmd === 'I'){
            queue.push(parseInt(num));
        }else {
            if(num === '1') queue.pop();
            else queue.shift();
        }
        queue.sort((a, b) => a - b);
    });
    const max = queue.pop() || 0;
    const min = queue.shift() || max;
    return [max, min];
}

function solution(tickets) {
    var answer = [];
    tickets.sort((a, b) => {
        return a[1].localeCompare(b[1]);
    });
    console.log(tickets);
    v = new Array(tickets.length).fill(false);
    answer.push("ICN");
    DFS("ICN", tickets, answer);

    return answer;
}
let v;
let is = false;
let DFS = (pspt, tickets, answer) => {
    if (answer.length == tickets.length + 1) {
        is = true;
        return;
    }

    for (let i in tickets) {
        if (!v[i] && tickets[i][0] == pspt) {
            v[i] = true;
            answer.push(tickets[i][1]);
            DFS(tickets[i][1], tickets, answer);
            if (is) return;
            answer.pop();
            v[i] = false;
        }
    }
}
let answer;
function solution(tickets) {
    const N = tickets.length + 1;
    const v = Array.from({length:N}).fill(false);
    const routes = ["ICN"];
    tickets.sort((a,b) => a[1].localeCompare(b[1]));
    DFS("ICN", tickets, N, v, routes);
    return answer;
}

function DFS(passport, tickets, N, v, routes){
    if(routes.length === N){
        answer = routes;
        return;
    }    
    
    for(const i in tickets){
        if(answer) return;
        const [s, d] = tickets[i];
        if(!v[i] && passport === s){
            v[i] = true;
            DFS(d, tickets, N, v, [...routes, d]);
            v[i] = false;
        }
    }
}

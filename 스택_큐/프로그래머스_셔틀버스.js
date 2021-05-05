function solution(n, t, m, timetable) {
    for(let i=0;i<timetable.length;i++){
        let time = timetable[i].split(":");
        timetable[i] = new Date(2018,10,10,time[0],time[1]).getTime();
    }
    timetable.sort((a,b)=> a-b);
    let start = new Date(2018,10,10,9,0).getTime();
    //n회 셔틀이온다.
    let space = [];
    let shuttle = 0;
    for(let i=0;i<n;i++){
        shuttle = start+(i*t*60*1000);
        space = [];
        while(timetable.length > 0){
            if(timetable[0]<=shuttle){
                if(space.length < m) space.push(timetable.shift());
                else break;
            }else{
                break;
            }
        }
    }
    let last = new Date(shuttle);
    if(space.length >= m) last = new Date(space[space.length-1]-1000);
        
    let hour = last.getHours();
    if(hour <= 9) hour = "0"+hour;
    
    let minute = last.getMinutes();
    if(minute <= 9) minute = "0"+minute;
    
    return hour+":"+minute;
    
}

function solution(new_id) {
  
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9\-\_\.]/gi,"");
    new_id = new_id.replace(/\.{2,}/gi,".");
    new_id = new_id.replace(/^\.|\.$/gi,"");
    if(new_id.length==0) new_id = "a";
    new_id = new_id.slice(0,15);
    new_id = new_id.replace(/^\.|\.$/gi,"");
    
    while(new_id.length <= 2) new_id+=new_id.slice(new_id.length-1);
        
    return new_id;
}

function solution(s) {
    const stack = [];
    
    const summary = s.split(" ").reduce((acc, cur) => {
        let previous = 0;
        let current = cur === "Z" ? 0 : Number(cur);
        
        if (cur === "Z") {
            previous = stack.pop();   
        }
        else {
            stack.push(current);
        }
        
        return acc + current - previous;
    }, 0);
    
    return summary;
}
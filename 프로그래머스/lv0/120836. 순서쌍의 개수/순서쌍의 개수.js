function solution(n) {
    const list = [];
    
    for (index of Array(n).keys()) {
        const number = index + 1;
        
        if (Number.isInteger(n / number)) {
            list.push([number, n / number]);
        }
    }
    
    return list.length;
}
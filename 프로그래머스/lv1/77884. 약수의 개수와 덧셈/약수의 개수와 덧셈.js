function solution(left, right) {
    let summary = 0;
    
    for (let i = left; i <= right; ++i) {
        const measure = [];
        for (let j = 1; j <= i; ++j) {
            if (i % j === 0) {
                measure.push(j);
            }
        }
        
        if (measure.length % 2 === 0) {
            summary += i;
        } else {
            summary -= i;
        }
    }
    
    return summary;
}
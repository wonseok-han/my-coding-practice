function solution(n, m) {
    let minFactor = 0;
    let maxMultiple = 0;
    const multiple = [];
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    for (let i = max; i >= 1; --i) {
        if (n % i === 0 && m % i === 0) {
            minFactor = i;
            break;
        }
    }
    
    for (let i = 1; i <= n * m; ++i) {
        multiple.push(max * i);
        
        if (multiple.includes(min * i)) {
            maxMultiple = min * i;
            break;
        }
    }
    
    return [minFactor, maxMultiple];
}
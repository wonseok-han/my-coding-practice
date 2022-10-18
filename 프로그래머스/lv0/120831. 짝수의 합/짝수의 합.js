function solution(n) {
    let summary = 0;
    for (let i = 2; i <= n; i = i + 2) {
        summary += i;
    }
    
    return summary;
}
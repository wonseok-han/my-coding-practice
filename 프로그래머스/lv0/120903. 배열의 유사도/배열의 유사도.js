function solution(s1, s2) {
    const summary = [
        ...s1,
        ...s2,
    ]
    const length = summary.length;
    
    return length - [...new Set(summary)].length;
}
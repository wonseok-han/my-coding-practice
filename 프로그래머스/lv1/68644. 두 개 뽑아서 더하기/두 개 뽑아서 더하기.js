function solution(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const answer = [];
    
    for (let i = 0; i < sorted.length - 1; ++i) {
        for (let j = i + 1; j < sorted.length; ++j) {
            answer.push(sorted[i] + sorted[j]);
        }
    }
    
    return [...new Set(answer)].sort((a, b) => a - b);
}
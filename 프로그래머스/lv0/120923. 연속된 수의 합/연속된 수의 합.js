function solution(num, total) {
    let answer = [];
    
    for (let i = -total - num; i <= total; ++i) {
        let sum = 0;
        
        for (let j = i; j < i + num; ++j) {
            sum += j;
            answer.push(j);
        }
        
        if (sum === total) break;
        answer = [];
    }
    
    return answer;
}
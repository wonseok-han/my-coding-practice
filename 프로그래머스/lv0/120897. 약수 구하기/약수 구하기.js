function solution(n) {
    let answer = [];
    
    for (index of Array(n).keys()) {
        const number = index + 1;
        if (n % number === 0) {
            answer.push(number);
        }
    }
    
    return answer;
}
function solution(n) {
    const answer = [];
    for (index of Array(n).keys()) {
        const number = index + 1;
        if (number % 2 !== 0) {
            answer.push(number);
        }
    }
    
    return answer;
}
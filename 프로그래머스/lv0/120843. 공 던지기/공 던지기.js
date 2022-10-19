function solution(numbers, k) {
    let ball = 1;
    
    for (let i = 1; i < k; ++i) {
        ball = (ball + 2) % numbers.length;
    }
    
    return ball;
}
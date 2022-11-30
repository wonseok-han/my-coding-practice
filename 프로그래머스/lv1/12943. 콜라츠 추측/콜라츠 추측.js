function solution(num) {
    let number = num;
    let repeat = 0;
    
    if (num === 1) return 0;
    
    while (number !== 1) {
        if (repeat === 500) {
            repeat = -1;
            break;
        } else if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }
        
        repeat++;
    }
    
    return repeat;
}
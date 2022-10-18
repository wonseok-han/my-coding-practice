function solution(n) {
    let piece = 6;
    let count = 1;
    
    while (piece % n !== 0) {
        piece = 6 * count;
        count++;
    }
    
    return piece / 6;
}
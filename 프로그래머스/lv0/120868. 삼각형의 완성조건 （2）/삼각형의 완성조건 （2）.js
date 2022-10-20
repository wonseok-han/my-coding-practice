function solution(sides) {
    const min = Math.min(...sides);
    const max = Math.max(...sides);
    const other = min + max - 1;
    
    return other - (max - min);
}
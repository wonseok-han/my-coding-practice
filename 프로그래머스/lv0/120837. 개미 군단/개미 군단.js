function solution(hp) {
    const quotient5 = Math.floor(hp / 5);
    const remainder5 = hp % 5;
    const quotient3 = Math.floor(remainder5 / 3);
    const remainder3 = remainder5 % 3;
    const quotient1 = remainder3 / 1;
    
    return quotient5 + quotient3 + quotient1;
}
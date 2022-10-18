const getGcd = (numerator, denominator) => {
    return numerator % denominator === 0 ? denominator : getGcd(denominator, numerator % denominator);
}

function solution(denum1, num1, denum2, num2) {
    const numerator = denum1 * num2 + denum2 * num1;
    const denominator = num1 * num2;
    const gcd = getGcd(numerator, denominator);
    
    return [numerator / gcd, denominator / gcd];
}
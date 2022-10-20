const isFrime = (number) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            divisors.push(i);
            if (number / i != i) divisors.push(number / i);
        }
    }
    
    return divisors.length === 2;
}

const getGcd = (numerator, denominator) => {
    return numerator % denominator === 0 ? denominator : getGcd(denominator, numerator % denominator);
}

function solution(a, b) {
    const gcd = getGcd(a, b);
    const numerator = a / gcd;
    const denominator = b / gcd;
    const divisors = [];
    
    for (let i = 1 ; i <= Math.sqrt(denominator) ; i++) {
        if (denominator % i === 0) {
            divisors.push(i);
            if (denominator / i != i) divisors.push(denominator / i);
        }
    }
    
    const frimes = divisors.sort((a, b) => a - b).filter((number) => isFrime(number))
    
    return frimes.find((item) => item !== 2 && item !== 5) ? 2 : 1;
}
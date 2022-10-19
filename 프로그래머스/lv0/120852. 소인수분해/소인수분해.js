const isFrime = (number) => {
    const divisors = [];
    for (let i = 1 ; i <= Math.sqrt(number) ; i++) {
        if (number % i === 0) {
            divisors.push(i);
            if (number / i != i) divisors.push(number / i);
        }
    }
    
    return divisors.length === 2;
}

function solution(n) {
    const divisors = [];
    
    for (let i = 1 ; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (n / i != i) divisors.push(n / i);
        }
    }
    
    const frimes = divisors.sort((a, b) => a - b).filter((number) => isFrime(number));
    
    return frimes;
}
const isPrime = (number) => {
    if (!number || number <= 1) return false;
    else if (number === 2) return true;
    
    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(n, k) {
    return n.toString(k).split("0").reduce((acc, cur) => isPrime(cur) ? acc + 1 : acc, 0);
}
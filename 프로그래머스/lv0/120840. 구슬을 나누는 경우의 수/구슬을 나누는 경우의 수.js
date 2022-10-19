const factorial = (number) => {
    return [...Array(number).keys()].reduce((acc, cur) => acc * BigInt(cur + 1), BigInt(1));
}

function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
    
}
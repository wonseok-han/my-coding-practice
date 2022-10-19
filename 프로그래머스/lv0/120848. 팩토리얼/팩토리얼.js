const factorial = (number) => {
    return [...Array(number).keys()].reduce((acc, cur) => acc * (cur + 1), 1);
}

function solution(n) {
    let index = 1;
    
    while (factorial(index) <= n) {
        index++;
    }
    
    return index-1;
}
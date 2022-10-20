function solution(n) {
    const list = [...Array(n * 3).keys()].filter((number) => number % 3 !== 0 && !String(number).includes("3"))
    
    return list[n - 1];
}
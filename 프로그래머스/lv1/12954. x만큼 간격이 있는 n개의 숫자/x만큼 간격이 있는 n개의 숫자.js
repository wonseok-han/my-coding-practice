function solution(x, n) {
    return [...new Array(n)].reduce((acc, cur, index) => [...acc, !acc[index - 1] ? x : acc[index - 1] + x], []);
}
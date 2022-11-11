function solution(n) {
    return [...new Array(n)].reduce((acc, cur, i) => acc + (n % (i + 1) !== 0 ? 0 : (i + 1)), 0);
}
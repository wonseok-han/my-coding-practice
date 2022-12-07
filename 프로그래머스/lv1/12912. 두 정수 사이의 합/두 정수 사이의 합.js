function solution(a, b) {
    const [min, max] = [a, b].sort((a, b) => a - b);
    return [...new Array(max - min + 1)].reduce((acc, cur, index) => acc + index + min, 0);
}
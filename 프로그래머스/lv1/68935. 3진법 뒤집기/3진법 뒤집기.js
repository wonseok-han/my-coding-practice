function solution(n) {
    return parseInt([...String(n.toString(3))].reverse().join(""), 3);
}
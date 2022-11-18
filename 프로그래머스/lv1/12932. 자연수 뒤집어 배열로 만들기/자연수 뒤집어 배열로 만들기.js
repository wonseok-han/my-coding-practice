function solution(n) {
    return String(n).split("").reverse().reduce((acc ,cur) => [...acc, Number(cur)], []);
}
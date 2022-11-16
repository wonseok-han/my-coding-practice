const MAP = {
    0: "수",
    1: "박"
}

function solution(n) {
    return [...new Array(n)].reduce((acc, cur, index) => acc + MAP[index % 2], "");
}
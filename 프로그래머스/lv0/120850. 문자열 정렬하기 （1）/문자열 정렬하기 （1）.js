function solution(my_string) {
    return my_string.replace(/[a-z]/gi, "").split("").sort((a, b) => a - b).reduce((acc, cur) => [
        ...acc,
        Number(cur),
    ], []);
}
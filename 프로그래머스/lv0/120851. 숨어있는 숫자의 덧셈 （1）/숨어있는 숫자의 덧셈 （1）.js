function solution(my_string) {
    return my_string.replace(/[a-z]/gi, "").split("").reduce((acc, cur) => acc + Number(cur), 0);
}
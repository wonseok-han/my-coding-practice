function solution(my_string, n) {
    return my_string.split("").reduce((acc, cur) => {
        let str = "";
        for (let i = 0; i < n; ++i) {
            str += cur;
        }
        return acc + str;
    }, "");
}
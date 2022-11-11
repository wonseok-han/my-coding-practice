function solution(s, n) {
    return s.split("").reduce((acc, cur) => {
        let first = "";
        let last = "";
        
        if (cur === cur.toUpperCase()) {
            first = "A";
            last = "Z";           
        } else {
            first = "a";
            last = "z";
        }
        
        return acc + (cur === " " ? " " : String.fromCharCode(cur === " " ? " "
                                                              : cur.charCodeAt() + n > last.charCodeAt() ? (first.charCodeAt() - 1) + (cur.charCodeAt() + n - last.charCodeAt())
                                                              : cur.charCodeAt() + n));
    }, "");
}
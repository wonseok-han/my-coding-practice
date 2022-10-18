function solution(my_string) {
    return my_string.split("").reduce((acc, cur) => {
        const lowerReg = new RegExp("[a-z]", "g");
        const upperReg = new RegExp("[A-Z]", "g");
        
        if (lowerReg.test(cur)) {
            return [...acc, cur.toUpperCase()];
        }
        else {
            return [...acc, cur.toLowerCase()];
        }
    }, []).join("");
}
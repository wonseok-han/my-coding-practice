const STD = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};

function solution(s) {
    let arr = [];
    
    return Number(s.split("").reduce((acc, cur) => {
        let ret = [...acc];
        if (!isNaN(cur)) {
            ret = [...acc, Number(cur)];
        } else {
            arr.push(cur);
            if (Object.keys(STD).includes(arr.join(""))) {
                const number = STD[arr.join("")]
                arr = [];
                ret = [...acc, number];
            }
        }
        
        return ret;
    }, []).join(""));
}
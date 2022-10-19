const WORDS = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    const doubleFiltered = babbling.filter((word) => !new RegExp(WORDS.reduce((acc, cur) => [...acc, cur+cur], []).join("|"), "gi").test(word));
    
    const replaced = doubleFiltered.reduce((acc, cur) => {
        let replacedList = [];
        
        const regExp = new RegExp(WORDS.join("|"), "gi");
        if (regExp.test(cur)) {
            replacedList.push(cur.replace(regExp, ""));
        }

        return [
            ...acc,
            ...replacedList,
        ]
    }, []).filter((item) => item === "");
    
    return replaced.length;
}
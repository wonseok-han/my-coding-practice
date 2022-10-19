const WORDS = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    const filtered = babbling.filter((word) => !new RegExp(WORDS.reduce((acc, cur) => [...acc, cur+cur], []).join("|"), "gi").test(word));
    
    const replaced = filtered.reduce((acc, cur) => {
        let replacedList = [];
        
        const regExp = new RegExp(WORDS.join("|"), "gi");
        if (regExp.test(cur)) {
            const replacedStr = cur.replace(regExp, "");
            replacedList.push(replacedStr);
        }

        return [
            ...acc,
            ...replacedList,
        ]
    }, []).filter((item) => item === "");
    
    return replaced.length;
}
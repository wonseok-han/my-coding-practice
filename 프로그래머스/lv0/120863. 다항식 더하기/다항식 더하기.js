function solution(polynomial) {
    const xCount = polynomial.split("+").reduce((acc, cur) => {
        if (cur.includes("x")) {
            const [number, x] = cur.split("x");
            return {
                x: acc["x"] ? Number(number) ? acc["x"] + Number(number) : acc["x"] + 1 : Number(number) ? Number(number) : 1
            }
        }
        
        return {
            ...acc,
        }
    }, {});
    
    const otherSummary = polynomial.replace(/ /g, "").split("+").filter((item) => !item.includes("x")).reduce((acc, cur) => acc + Number(cur), 0);
    const preStr = !xCount["x"] ? ""
                        : xCount["x"] === 1 ? "x"
                        : xCount["x"] + "x";
    const postStr = !preStr ? otherSummary
                        : otherSummary === 0 ? ""
                        : " + " + otherSummary;
    
    return preStr + postStr;
}
function solution(s) {
    const obj = s.split("").reduce((acc, cur) => ({
        ...acc,
        [cur]: acc[cur] == undefined ? 1 : acc[cur] + 1,
    }), {});
    
    return Object.keys(obj).filter((key) => obj[key] === 1).sort().join("");
}
function solution(before, after) {
    const beforeObj = before.split("").reduce((acc, cur, index, array) => ({
        ...acc,
        [cur]: acc[cur] == undefined ? 1 : acc[cur] + 1
    }), {});
    const afterObj = after.split("").reduce((acc, cur, index, array) => ({
        ...acc,
        [cur]: acc[cur] == undefined ? 1 : acc[cur] + 1
    }), {})
    
    for (key of Object.keys(beforeObj)) {
        if (beforeObj[key] !== afterObj[key]) {
            return 0;
        }
    }
    
    return 1;
}
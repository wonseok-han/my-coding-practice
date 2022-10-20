function solution(numlist, n) {
    const gapList = numlist.reduce((acc, cur) => [
        ...acc,
        {
            value: cur,
            gap: Math.abs(n - cur),
        }
    ], []);
    
    return gapList.sort((a, b) => a.gap - b.gap || b.value - a.value).reduce((acc, cur) => [...acc, cur.value], []);
}
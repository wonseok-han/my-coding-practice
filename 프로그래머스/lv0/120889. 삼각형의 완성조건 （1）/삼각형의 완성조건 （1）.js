function solution(sides) {
    const max = Math.max(...sides);
    const otherSummary =  [
        ...sides.slice(0, sides.indexOf(max)),
        ...sides.slice(sides.indexOf(max) + 1),
    ].reduce((acc, cur) => acc + cur, 0);
    
    return max < otherSummary ? 1 : 2;
}
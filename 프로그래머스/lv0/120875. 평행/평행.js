function solution(dots) {
    let count = 0;
    let slopes = [];
    
    for (let i = 0; i < dots.length; ++i) {
        for (let j = i + 1; j < dots.length; ++j) {
            slopes.push({
                position1: dots[i],
                position2: dots[j],
                slope: Math.abs(dots[j][1] - dots[i][1]) / Math.abs(dots[j][0] - dots[i][0])
            });
        }
    }
    
    const found = Object.values(slopes.reduce((acc, cur) => ({
        ...acc,
        [cur.slope]: acc[cur.slope] == undefined ? 1 : acc[cur.slope] + 1
    }), {})).find((count) => count > 1);
    
    return found ? 1 : 0;
}
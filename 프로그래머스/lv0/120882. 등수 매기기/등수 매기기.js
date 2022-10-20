function solution(score) {
    const averages = score.reduce((acc, cur) => [
        ...acc,
        (cur[0] + cur[1]) / 2,
    ], []);
    const scoreRank = [...averages].sort((a, b) => b - a).reduce((acc, cur, index) => ({
        ...acc,
        [cur]: acc[cur] == undefined ? index + 1 : acc[cur],
    }), {});
    
    return averages.reduce((acc ,cur) => [
        ...acc,
        scoreRank[cur],
    ], []);
}
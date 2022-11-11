function solution(k, m, score) {
    const arr = [];
    const sortedScore = score.sort((a, b) => b - a);
    let temp = "";
    
    for (let i = 0; i < sortedScore.length; ++i) {
        temp += String(sortedScore[i]);
        if ((i + 1) % m === 0) {
            arr.push([...temp]);
            temp = "";
        }        
    }
    
    return arr.reduce((acc, cur) => acc + Math.min(...cur) * cur.length, 0);
}
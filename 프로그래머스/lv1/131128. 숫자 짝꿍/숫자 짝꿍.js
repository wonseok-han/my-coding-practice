function solution(X, Y) {
    const numbers = [...new Array(10)].fill(0);
    const mixed = [];
    let zeroCnt = 0;
    
    for (let i = 0; i < X.length; ++i) {
        numbers[X[i]] += 1;
    }
    
    for (let i = 0; i < Y.length; ++i) {
        if (numbers[Y[i]] > 0) {
            mixed.push(Y[i]);
            numbers[Y[i]] -= 1;
            
            if (Y[i] === "0") zeroCnt++;
        }
    }
    
    const result = mixed.sort((a, b) => b - a).join("");
    
    return result.length < 1 ? "-1" : result.length === zeroCnt ? "0" : result;
}
function solution(k, tangerine) {
    let mandarins = {};
    for (let i = 0; i < tangerine.length; ++i) {
        Object.assign(mandarins, {
            [tangerine[i]]: mandarins[tangerine[i]] == null ? 1 : mandarins[tangerine[i]] + 1
        });
    }
    const values = Object.values(mandarins).sort((a, b) => b - a);
    
    let acc = 0;
    for (let i = 0; i < values.length; ++i) {
        acc += values[i];
        
        if (acc >= k) return i + 1;
    }
    
    return 0;
}
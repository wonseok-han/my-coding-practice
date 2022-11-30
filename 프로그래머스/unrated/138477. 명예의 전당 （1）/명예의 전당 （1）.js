function solution(k, score) {
    const honors = [];
    return score.reduce((acc ,cur) => {
        if (honors.length < k) {
            honors.push(cur);
        } else {
            if (honors[honors.length - 1] <= cur) {
                honors.pop();
                honors.push(cur);
            }
        }
        honors.sort((a, b) => b - a);
        
        return [
            ...acc,
            honors[honors.length - 1]
        ]
    }, []);
}
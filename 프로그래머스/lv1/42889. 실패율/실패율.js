function solution(N, stages) {
    return [...new Array(N)].reduce((acc, cur, index) => {
        const stage = index + 1;
        let challenged = 0;
        let succeed = 0;
        
        for (pass of stages) {
            if (pass > stage - 1 && pass <= stage) {
                succeed++;
            }
            if (pass >= stage) {
                challenged++;
            }
        }
        
        return [
            ...acc,
            [stage, succeed / challenged]
        ];
    }, []).sort((a, b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0)
    .reduce((acc, cur) => [...acc, cur[0]], []);
}
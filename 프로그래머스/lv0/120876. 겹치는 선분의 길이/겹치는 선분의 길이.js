function solution(lines) {
    return Object.values(lines.reduce((acc, cur) => {
        const points = [];
        const [start, end] = cur.sort((a, b) => a - b);
        
        for (let point = start; point < end; ++point) {
            points.push(point);
        }
        
        return [
            ...acc,
            ...points,
        ];
    }, []).reduce((acc, cur) => ({
        ...acc,
        [cur]: acc[cur] == undefined ? 1 : acc[cur] + 1
    }), {})).filter((point) => point > 1).length;
}
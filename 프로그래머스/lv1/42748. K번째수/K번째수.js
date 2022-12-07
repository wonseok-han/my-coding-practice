function solution(array, commands) {
    return commands.reduce((acc, cur) => {
        const [i, j, k] = cur;
        return [
            ...acc,
            array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
        ];
    }, []);
}
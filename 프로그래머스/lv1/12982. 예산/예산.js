function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((acc, cur) => {
        const [amount, count] = acc;
        return amount + cur <= budget ? [amount + cur, count + 1] : acc;
    }, [0, 0])[1];
}
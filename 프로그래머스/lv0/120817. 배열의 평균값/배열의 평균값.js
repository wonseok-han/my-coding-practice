function solution(numbers) {
    const summary = numbers.reduce((acc, cur) => acc + cur, 0)
    return summary / numbers.length;
}
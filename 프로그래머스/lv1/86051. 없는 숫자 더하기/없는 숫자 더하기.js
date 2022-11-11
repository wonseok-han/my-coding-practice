const SUMMARY = [...new Array(10)].reduce((acc, cur, index) => acc + index, 0);

function solution(numbers) {
    return SUMMARY - numbers.reduce((acc, cur) => acc + cur, 0);
}
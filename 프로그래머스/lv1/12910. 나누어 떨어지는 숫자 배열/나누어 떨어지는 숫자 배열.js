function solution(arr, divisor) {
    const result = arr.reduce((acc, cur) => cur % divisor === 0 ? [...acc, cur] : [...acc], []).sort((a, b) => a - b);
    
    return result.length < 1 ? [-1] : result;
}
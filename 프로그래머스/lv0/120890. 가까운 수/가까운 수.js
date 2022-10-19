function solution(array, n) {
    const distances = array.reduce((acc, cur) => [...acc, Math.abs(cur - n)], []);
    const min = Math.min(...distances);
    
    return array.sort((a, b) => a - b).find((number) => Math.abs(number - n) === min);
}
function solution(arr) {
    const minIndex = arr.indexOf(Math.min(...arr));
    return arr[0] === 10 ? [-1] : [...arr.slice(0, minIndex), ...arr.slice(minIndex + 1, arr.length)];
}
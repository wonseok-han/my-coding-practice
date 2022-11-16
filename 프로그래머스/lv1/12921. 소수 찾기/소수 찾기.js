function solution(n) {
    // const arr = [...new Array(n + 1)].reduce((acc, cur, index) => [...acc, index], []).fill(false, 0, 2);
    const arr = [];
    
    for (i = 0; i < n + 1; ++i) {
        arr.push(i);
    }
    arr.fill(false, 0, 2);
    for (let i = 2; i * i <= n; i += 1) {
        if (arr[i] !== false) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    return arr.filter((number) => number !== false).length;
}